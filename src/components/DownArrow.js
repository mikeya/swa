import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { breakpoints, debounce } from "../constants";

const Wrapper = styled.svg`
  width: 40px;
  height: auto;
  animation: ${(props) => props.anim};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transition: 0.2s ease;
  opacity: ${(props) => (props.gone ? "0" : "1")};
  @media (max-width: ${breakpoints.tablet}) {
    width: 24px;
  }
`;
const float = keyframes`
    0%{
        transform: translate(-50%, 10px)
    }
    50% {

        transform: translate(-50%, -10px)
    }
    100% {
        transform: translate(-50%,10px)
    }
`;

function DownArrow({ className }) {
  const [scroll, setScroll] = useState(window.scrollY);
  const [gone, setGone] = useState(false);
  const shouldDisappear = scroll > 60;

  const handleScroll = debounce(() => {
    setScroll(window.scrollY);
  }, 100);

  useEffect(() => {
    if (shouldDisappear) {
      setGone(true);
      window.removeEventListener("remove", handleScroll);
    }
  }, [setGone, shouldDisappear, handleScroll]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Wrapper
      gone={scroll > 60 || gone}
      anim={float}
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="40"
      fill="none"
      viewBox="0 0 53 40"
      className={className}
    >
      <path
        fill="#fff"
        stroke="#DC3C44"
        strokeWidth="7.067"
        d="M26.496 35.55L4.331 3.533h44.33L26.497 35.55zM50.354 3.533h-.006.006z"
      ></path>
    </Wrapper>
  );
}

export default DownArrow;
