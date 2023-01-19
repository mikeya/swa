import React from "react";
import styled from "styled-components";
import { breakpoints } from "../constants";

const Wrapper = styled("section")`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  isolation: isolate;
  min-height: 900px;
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: revert;
    min-height: 100vh;
  }
  @media (max-width: ${breakpoints.mobile}) {
    min-height: revert;
  }
`;

const Page = ({ className, children, id }) => {
  return (
    <Wrapper id={id} className={className}>
      {children}
    </Wrapper>
  );
};

export default Page;
