import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints, fonts } from "../constants";

const Wrapper = styled(motion.p)`
  font-family: ${fonts.familyText};
  font-size: var(--font-size-text);
  color: ${(props) => props.mainColor};
  max-width: 651px;
  margin: 0px auto;
`;

const Content = ({ mainColor, children, className, as, left }) => {
  const [contentRef, contentInView] = useInView({ triggerOnce: true });

  return (
    <Wrapper
      as={as}
      className={className}
      mainColor={mainColor}
      initial={{ x: left ? "-30%" : "30%", opacity: 0 }}
      animate={contentInView ? { x: "0%", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      ref={contentRef}
    >
      {children}
    </Wrapper>
  );
};

export default Content;
