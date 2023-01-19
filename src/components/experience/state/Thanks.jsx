import React, { useState, useEffect } from "react";
import Buttons from "../../common/buttons/Buttons";
import Titles from "../../common/titles/Titles";
import Mail from "./../../../assets/mail";
import Paragraph from "./../../common/paragraph/Paragraph";
import getText from "./../../../Services/getText";

const Thanks = () => {
  const [texts, setTexts] = useState(null);

  const fetchText = async () => {
    const text = await getText('thanks');
    setTexts(text[0]);
  };
  
  useEffect(() => {
    fetchText();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-24 ">
        <Mail />
      </div>
      <Titles
        classes="font-drukTextWide text-4xl text-white text-center pt-5"
        titleText={texts?.attributes.title}
      />
      <Paragraph
        classes="font-noto text-center text-white text-lg pt-5"
        pText={texts?.attributes.subtitle}
      />
      <div className="pt-8">
        <a href="/menu">
          <Buttons
          classes="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-yellow-300 group"
          text={texts?.attributes.buttonText}
          />
        </a>
      </div>
    </div>
  );
};

export default Thanks;
