import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { PageImg } from "./Landing";
import yogaImg from "../assets/yoga.jpg";
import { colors } from "../constants";
import Title from "../components/Title";
import Content from "../components/Content";
import ContentWrap from "../components/ContentWrap";

const StyledPage = styled(Page)``;

const TitleWrap = styled.div`
  max-width: 651px;
  margin: 0px auto;
`;
const GymLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Yoga = () => {
  return (
    <StyledPage id="yoga">
      <ContentWrap bgColor={colors.font}>
        <TitleWrap>
          <Title
            as={"h2"}
            mainColor={colors.dark}
            strokeColor={colors.primary}
            title="Yoga Instructor"
          />
        </TitleWrap>
        <Content left mainColor={colors.dark}>
          I hold a 200 hour psychologically sensitive, trauma informed
          certification from Room to Breathe. I lead restorative yoga classes
          and private sessions at{" "}
          <GymLink href="https://rockwellbarbell.com/" target="_blank">
            Rockwell Barbell
          </GymLink>
          . My yoga is an empathetic practice, meaning: come as you are, no
          requirements or experience necessary!
          <br />
          <br />
          Are you a business looking to empower your employees with a yoga
          class? I can do that too!
        </Content>
      </ContentWrap>
      <PageImg src={yogaImg} alt="Adrienne doing a plank" />
    </StyledPage>
  );
};

export default Yoga;
