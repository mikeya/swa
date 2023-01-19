import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../constants";

const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 0px 60px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 60px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px 32px 42px;
  }
`;

const ContentWrap = ({ children, className, as, bgColor }) => {
  return (
    <Wrapper className={className} bgColor={bgColor} as={as}>
      {children}
    </Wrapper>
  );
};

export default ContentWrap;
