import React from "react";

function Close({ handleClick, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      className={className}
      onClick={handleClick}
    >
      <path
        fill="#5A3324"
        d="M21.707 1.707L20.293.293 11 9.586 1.707.293.293 1.707 9.586 11 .293 20.293l1.414 1.414L11 12.414l9.293 9.293 1.414-1.414L12.414 11l9.293-9.293z"
      ></path>
    </svg>
  );
}

export default Close;
