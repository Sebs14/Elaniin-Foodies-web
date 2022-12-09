import React from "react";

const ArrowButton = ({text}) => {
  return (
    <div>
      <a href="/" className=" max-w-fit">
        <div className="flex items-center lg:pl-10 md:px-12 px-4 lg:pt-14 md:pt-14 pt-7">
          <h3 className=" font-syne font-bold  text-[22px]">{text}</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ArrowButton;
