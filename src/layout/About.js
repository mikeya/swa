import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { PageImg } from "./Landing";
import aboutImg from "../assets/about.jpg";
import { colors } from "../constants";
import Title from "../components/Title";
import Content from "../components/Content";
import ContentWrap from "../components/ContentWrap";

const StyledPage = styled(Page)``;

const TitleWrap = styled.div`
  max-width: 651px;
  margin: 0px auto;
`;

const About = () => {
  return (
    <StyledPage id="about">
      <PageImg src={aboutImg} alt="Adrienne with her arms crossed" />
      <ContentWrap bgColor={colors.primary}>
        <TitleWrap>
          <Title
            as={"h2"}
            mainColor={colors.font}
            strokeColor={colors.dark}
            title="Meet Adrienne"
          />
        </TitleWrap>
        <Content mainColor={colors.font}>
          Hi there! My name is Adrienne. I am a strength coach and yoga
          instructor in Chicago, IL. I love movement that connects me to my
          truest self. Teaching and practicing yoga brings me to my softer, more
          intuitive side, while strength training and coaching connect me to my
          grittier, more resolute side.
          <br />
          <br />
          Empowering others to find their strength at the gym and in the world
          is my main goal. I meet each client wherever they are in their fitness
          journey.
          <br />
          <br />
          In my off time, you can find me hanging out with my partner and my
          pup, trying new restaurants, and traveling.
        </Content>
      </ContentWrap>
    </StyledPage>
  );
};

export default About;
