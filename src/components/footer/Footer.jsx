import React, { useState, useEffect } from "react";
import FoodiesFooter from "../../assets/foodies_footer.svg";
import AppStore from "../../assets/appstore.jpg";
import GooglePlay from "../../assets/googleplay.jpg";
import Line from "../../assets/line";
import Paragraph from "../common/paragraph/Paragraph";
import getText from "./../../Services/getText";

const Footer = () => {
  const [texts, setTexts] = useState(null);
  const fetchText = async () => {
    const text = await getText("footers");
    setTexts(text[0].attributes);
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="md:flex md:flex-row w-full items-center md:justify-between flex flex-col justify-center">
          <div className="pb-4">
            <img src={FoodiesFooter} />
          </div>
          <div className="flex space-x-2">
            <a href="https://www.apple.com/la/app-store/">
              <img
                src={
                  import.meta.env.VITE_STRAPI_URL +
                  texts?.appStore.data.attributes.url
                }
                alt="App Store redirect"
              />
            </a>
            <a href="https://play.google.com/store/games?hl=es&pli=1">
              <img
                src={
                  import.meta.env.VITE_STRAPI_URL +
                  texts?.googlePlay.data.attributes.url
                }
                alt="google Play redirect"
              />
            </a>
          </div>
        </div>
        <div className="pt-4 w-full">
          <Line />
        </div>
        <div className="flex md:flex-row flex-col space-y-3 pt-5 text-center font-bold items-center justify-start md:space-y-0 md:space-x-3 lg:space-x-44 text-black/50 ">
          <a href="/#address" className="hover:text-black">
            <Paragraph pText={texts?.buttonOne} />
          </a>
          <a href="/#whois" className="hover:text-black">
            <Paragraph pText={texts?.buttonTwo} />
          </a>
          <a href="/#carousel" className="hover:text-black">
            <Paragraph pText={texts?.buttonThree} />
          </a>
          <a href="/#contact" className="hover:text-black">
            <Paragraph pText={texts?.buttonFour} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
