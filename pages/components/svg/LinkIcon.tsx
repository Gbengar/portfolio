import React from "react";

const LinkIcon = () => {
  return (
    <button className=" w-10 h-10 flex items-center justify-center rounded-lg  group transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="black"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
        ></path>
        <path
          fill="black"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"
        ></path>
        <line
          x1="23.5"
          x2="41.5"
          y1="24.5"
          y2="6.5"
          fill="black"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
        ></line>
        <polyline
          fill="black"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          points="27.5,6.5 41.5,6.5 41.5,20.5"
        ></polyline>
      </svg>
    </button>
  );
};

export default LinkIcon;
