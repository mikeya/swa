import React from "react";

function ArrowIcon({ className, handleClick }) {
  return (
    <svg
      style={{ cursor: "pointer" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"
      ></path>
    </svg>
  );
}

export default ArrowIcon;
