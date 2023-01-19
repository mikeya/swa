import React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import { PageImg } from "./Landing";
import strengthImg from "../assets/strength.jpg";
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

const Strength = () => {
  return (
    <StyledPage id="strength">
      <PageImg src={strengthImg} alt="Adrienne doing curls" />
      <ContentWrap>
        <TitleWrap>
          <Title
            as={"h2"}
            mainColor={colors.font}
            strokeColor={colors.primary}
            title="Strength Coach"
          />
        </TitleWrap>
        <Content mainColor={colors.font}>
          I am a NASM certified personal trainer. I love teaching strengthening
          and effective movements, such as the squat, bench press, and deadlift.
          I emphasize the importance of a strong foundation and proper form,
          regardless of experience level. I offer personal training sessions at{" "}
          <GymLink href="https://rockwellbarbell.com/" target={"_blank"}>
            Rockwell Barbell
          </GymLink>{" "}
          in Roscoe Village.
          <br />
          <br />
          One of my favorite quotes:
          <br />
          <span style={{ fontWeight: "bolder" }}>
            "Discipline is sustained effort and unbending intent"
          </span>
        </Content>
      </ContentWrap>
    </StyledPage>
  );
};

export default Strength;
