import React from "react";

function Hamburger({ handleClick, className }) {
  return (
    <svg
      className={className}
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
      fill="none"
      viewBox="0 0 24 16"
    >
      <path
        fill="#fff"
        d="M24 16H0v-2.667h24V16zm0-6.667H0V6.667h24v2.666zm0-6.666H0V0h24v2.667z"
      ></path>
    </svg>
  );
}

export default Hamburger;
