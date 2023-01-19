import React, { useState, useEffect } from "react";
import ArrowButton from "../common/arrowbutton/ArrowButton";
import Titles from "../common/titles/Titles";
import getText from "../../Services/getText";

const WhoIsF = () => {
  const [texts, setTexts] = useState(null);
  const whois = "who-is-fs";

  const fetchText = async () => {
    const text = await getText(whois);
    setTexts(text[0]);
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div id="whois" className=" lg:flex justify-center ">
      <div className="bg-whois bg-no-repeat bg-cover lg:h-[565px] lg:w-[60%] h-[565px] w-full lg:text-5xl text-4xl">
        <div className="lg:pt-[404px] lg:pr-10 md:pt-[445px] md:pr-[53px] pt-[430px] px-2 flex flex-col">
          <Titles
            titleText={texts?.attributes.titleUp}
            classes="text text--zipping font-drukTextWide text-white text-right  "
          />
          <Titles
            titleText={texts?.attributes.titleDown}
            classes="text text--zipping font-drukTextWide text-[#FFD600] text-right"
          />
        </div>
      </div>
      <div className=" flex flex-col  lg:w-[40%]  w-full bg-flow bg-no-repeat bg-center bg-cover">
        <h2 className="font-syne font-bold text-2xl lg:pl-10 md:px-12 lg:pt-40 pt-16 pl-4">
        {texts?.attributes.subtitle}
        </h2>
        <p className=" font-noto text-black/50 lg:px-10 md:px-12 text-justify text-lg pt-7 px-4">
        {texts?.attributes.description}
        </p>
        <ArrowButton text={texts?.attributes.buttonText} />
      </div>
    </div>
  );
};

export default WhoIsF;
