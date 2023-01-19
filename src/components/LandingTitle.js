import { useWindowWidth } from "@react-hook/window-size";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { breakpoints, colors, fonts } from "../constants";

const Wrapper = styled.h1`
  padding-bottom: 56px;
  overflow: visible;
  @media (max-height: 800px) {
    padding-bottom: 28px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 12px;
  }
`;

const Word = styled(motion.span)`
  display: block;
  font-family: ${fonts.familyTitle};
  font-size: var(--font-size-title);
  color: ${colors.font};
  font-size: 6rem;
  line-height: 80px;
  z-index: 2;
  position: relative;
  font-weight: 500;

  &:before {
    content: "${(props) => props.content}";
    position: absolute;
    color: ${colors.primary};
    -webkit-text-stroke-width: 6px;
    -webkit-text-stroke-color: ${colors.primary};
    z-index: -1;
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 5rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: inline-block;
    width: revert;
    font-size: 3.5rem;
    &:before {
      -webkit-text-stroke-width: 4px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.1rem;
    &:before {
      -webkit-text-stroke-width: 3px;
    }
  }
`;

const LandingTitle = () => {
  const width = useWindowWidth();
  return (
    <Wrapper>
      <Word
        initial={
          width < 1000 ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
        }
        animate={
          width < 1000 ? { y: "0%", opacity: 1 } : { x: "0%", opacity: 1 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        content={"Stronger"}
      >
        Stronger
      </Word>{" "}
      <Word
        initial={
          width < 1000 ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
        }
        animate={
          width < 1000 ? { y: "0%", opacity: 1 } : { x: "0%", opacity: 1 }
        }
        transition={{ duration: 0.5, delay: 0.6 }}
        content={"With"}
      >
        With
      </Word>{" "}
      <Word
        initial={
          width < 1000 ? { y: "-10%", opacity: 0 } : { x: "-10%", opacity: 0 }
        }
        animate={
          width < 1000 ? { y: "0%", opacity: 1 } : { x: "0%", opacity: 1 }
        }
        transition={{ duration: 0.5, delay: 1 }}
        content={"Adrienne"}
      >
        Adrienne
      </Word>
    </Wrapper>
  );
};

export default LandingTitle;
