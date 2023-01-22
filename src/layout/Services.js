import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { breakpoints, colors } from "../constants";
import strengthIcon from "../assets/strengthIcon.png";
import yogaIcon from "../assets/yogaIcon.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  isolation: isolate;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header header"
    "strength yoga";
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "header"
      "yoga"
      "strength";
  }
`;
const Header = styled.div`
  grid-area: header;
  background-color: ${colors.primary};
  padding: 32px 0px 26px;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 0px 4px;
  }
`;
const StyledTitle = styled(Title)`
  padding-bottom: 0px;
  text-align: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px 0px;
  }
`;
const StrengthWrap = styled(Wrap)`
  grid-area: strength;
  background-color: ${colors.dark};
`;
const YogaWrap = styled(Wrap)`
  grid-area: yoga;
  background-color: ${colors.font};
  padding-top: 40px;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 18px;
  }
`;
const Label = styled.h3`
  font-size: var(--font-size-subtitle);
  margin-bottom: 36px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 18px;
  }
`;
const TrainingLabel = styled(Label)`
  color: ${colors.font};
  border-bottom: 1px solid ${colors.font};
`;
const YogaLabel = styled(Label)`
  color: ${colors.dark};
  border-bottom: 1px solid ${colors.dark};
`;

const YogaIcon = styled.img`
  margin-bottom: 32px;
  width: 86px;
  height: auto;
  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    margin-bottom: 16px;
  }
`;
const StrengthIcon = styled.img`
  margin-bottom: 32px;
  width: 98px;
  height: auto;
  @media (max-width: ${breakpoints.mobile}) {
    width: 74px;

    margin-bottom: 16px;
  }
`;
const TrainingText = styled(motion.p)`
  font-size: var(--font-size-text);
  margin-bottom: 24px;
  text-align: center;
`;
const YogaText = styled(motion.p)`
  font-size: var(--font-size-text);
  color: ${colors.dark};
  margin-bottom: 24px;
`;

const Services = () => {
  const [yogaRef, yogaInView] = useInView({ triggerOnce: true });
  const [strengthRef, strengthInView] = useInView({ triggerOnce: true });

  return (
    <Wrapper id="services">
      <Header>
        <StyledTitle
          mainColor={colors.dark}
          strokeColor={colors.font}
          title="Services"
        />
      </Header>
      <StrengthWrap>
        <StrengthIcon src={strengthIcon} alt="" />
        <TrainingLabel>Training</TrainingLabel>
        <TrainingText
          initial={{ opacity: 0 }}
          animate={strengthInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          60 Minute Individual Training Sessions
        </TrainingText>
        <TrainingText
          ref={strengthRef}
          initial={{ opacity: 0 }}
          animate={strengthInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Packages of 4, 6, or 8 sessions
        </TrainingText>
        <TrainingText
          initial={{ opacity: 0 }}
          animate={strengthInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          Custom Training Programs
        </TrainingText>
      </StrengthWrap>
      <YogaWrap>
        <YogaIcon src={yogaIcon} alt="" />
        <YogaLabel>Yoga</YogaLabel>
        <YogaText
          initial={{ opacity: 0 }}
          animate={yogaInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          60 Minute Individual Sessions
        </YogaText>
        <YogaText
          ref={yogaRef}
          initial={{ opacity: 0 }}
          animate={yogaInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Group Classes
        </YogaText>
        <YogaText
          initial={{ opacity: 0 }}
          animate={yogaInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
        >
          Corporate Yoga
        </YogaText>
      </YogaWrap>
    </Wrapper>
  );
};

export default Services;
