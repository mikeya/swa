import styled from "styled-components";
import React from "react";
import Page from "../components/Page";
import { breakpoints, colors, fonts, other } from "../constants";
import LandingImg from "../assets/landing.jpg";
import LandingTitle from "../components/LandingTitle";
import { keyframes } from "styled-components";
import DownArrow from "../components/DownArrow";

const StyledPage = styled(Page)`
  position: relative;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: ${other.navbarHeight.mobile};
    height: 100vh;
    min-height: 100vh;
    grid-template-rows: 1fr 1fr;
  }
`;
export const PageImg = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: ${breakpoints.tablet}) {
    grid-row: 1;
    max-height: ${(props) => (props.landing ? "revert" : "700px")};
  }
  @media (max-width: ${breakpoints.mobile}) {
    max-height: ${(props) => (props.landing ? "revert" : "400px")};
  }
`;
const ContentWrap = styled("article")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 130px;
  @media (max-width: ${breakpoints.desktop}) {
    /* align-items: center; */
    padding-left: 80px;
    padding-right: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    padding: 60px 0px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 24px 0px;
    padding-bottom: 64px;
  }
`;

const Subtitle = styled.h2`
  font-family: ${fonts.familyText};
  font-size: var(--font-size-subtitle);
  max-width: 550px;
  padding-bottom: 96px;
  animation: ${(props) => props.anim} forwards;
  animation-duration: 0.8s;
  animation-delay: 1.4s;
  animation-timing-function: ease;
  opacity: 0;
  @media (max-height: 800px) {
    padding-bottom: 48px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 36px;
  }
`;
const ContactBtn = styled.button`
  border: 3px solid ${colors.primaryHighlight};
  background-color: ${colors.primary};
  padding: 20px 120px;
  color: ${colors.font};
  font-weight: 500;
  font-size: var(--font-size-subtitle);
  animation: ${(props) => props.anim} forwards;
  animation-duration: 0.8s;
  animation-delay: 1.4s;
  animation-timing-function: ease;
  opacity: 0;
  cursor: pointer;
  isolation: isolate;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease, border-color 0.4s ease;
  & > a {
    color: ${colors.font};
    text-decoration: none;
    transition: color 0.4s ease;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${colors.primaryHighlight};
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    transform: translateY(100%);
    transition: transform 0.4s ease;
  }
  &:hover {
    border-color: ${colors.primary};
    & > a {
      color: ${colors.dark};
    }

    &:after {
      transform: translateY(0%);
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px 80px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 40px;
  }
`;

const StyledDownArrow = styled(DownArrow)`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -50%);

  @media (max-width: ${breakpoints.tablet}) {
    bottom: 3%;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Landing = () => {
  return (
    <StyledPage id="home">
      <ContentWrap>
        <LandingTitle />
        <Subtitle anim={fadeIn}>
          Certified Yoga Instructor + Strength Coach
        </Subtitle>
        <ContactBtn anim={fadeIn}>
          <a
            href="mailto:strongerwithadrienne@gmail.com"
            style={{ zIndex: "1" }}
          >
            LET'S TALK!
          </a>
        </ContactBtn>
      </ContentWrap>
      <PageImg
        landing={true}
        src={LandingImg}
        alt="Adrienne doing a side plank"
      />
      <StyledDownArrow />
    </StyledPage>
  );
};

export default Landing;
