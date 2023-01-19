import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints, fonts } from "../constants";

const Wrapper = styled(motion("h2"))`
  font-family: ${fonts.familyTitle};
  font-size: var(--font-size-title);
  color: ${(props) => props.mainColor};
  line-height: 72px;
  z-index: 2;
  padding-bottom: 56px;
  position: relative;
  font-weight: 500;

  &:before {
    content: "${(props) => props.content}";
    position: absolute;
    color: ${(props) => props.strokeColor};
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: ${(props) => props.strokeColor};
    z-index: -1;
  }
  @media (max-width: ${breakpoints.desktop}) {
    &:before {
      -webkit-text-stroke-width: 4px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 12px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding-bottom: 0px;
    &:before {
      -webkit-text-stroke-width: 3px;
    }
  }
`;
const Title = ({ title, mainColor, strokeColor, className, as }) => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true });

  return (
    <Wrapper
      className={className}
      content={title}
      mainColor={mainColor}
      strokeColor={strokeColor}
      initial={{ y: "-60%", opacity: 0 }}
      animate={titleInView ? { y: "0%", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      ref={titleRef}
    >
      {title}
    </Wrapper>
  );
};

export default Title;
