import React, { useState, useEffect } from "react";
import Titles from "../common/titles/Titles";
import First from "../../assets/first";
import Second from "./../../assets/second";
import Paragraph from "./../common/paragraph/Paragraph";
import Third from "./../../assets/third";
import Vectorl from "./../../assets/Vectorl";
import Vectorr from "./../../assets/Vectorr";
import getText from "../../Services/getText";

const DownloadApp = () => {
  const [texts, setTexts] = useState();

  const fetchText = async () => {
    const text = await getText("download-apps");
    setTexts(text[0]);
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div className="h-screen lg:h-[80vh] bg-white">
      <div className="lg:flex lg:justify-start lg:flex-row  lg:-space-x-96  flex flex-col justify-center lg:-space-y-0 -space-y-44 px-4">
        <img
          className="relative lg:-top-32 lg:max-w-5xl -top-40 lg:pl-0 md:pl-32 pl-20"
          alt="Mockup phone"
          src={
            import.meta.env.VITE_STRAPI_URL +
            texts?.attributes.mockup.data.attributes.url
          }
        />
        <div className="flex-col lg:pt-20 ">
          <div className=" bg-text bg-no-repeat bg-bottom bg-origin-padding px-10">
            <Titles
              titleText={texts?.attributes.title}
              classes="text  text-3xl font-bold font-drukTextWide text-center "
            />
            <Titles
              titleText={texts?.attributes.secondTitle}
              classes="text  text-3xl font-bold font-drukTextWide text-center pb-4"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative hidden md:block">
              <Vectorl />
              <Vectorr />
            </div>
            <div>
              <div className="md:flex mx-auto gap-4 mt-16 lg:w-1/2">
                <div className="flex flex-col pt-2 md:pt-0">
                  <First />
                  <Titles
                    titleText={texts?.attributes.subtitle}
                    classes="font-bold font-noto text-2xl text-center"
                  />
                  <Paragraph
                    pText={texts?.attributes.descriptionOne}
                    classes="text-center  font-noto"
                  />
                </div>
                <div className="flex flex-col pt-2 md:pt-0">
                  <Second />
                  <Titles
                    titleText={texts?.attributes.subtitleTwo}
                    classes="font-bold font-noto text-2xl text-center"
                  />
                  <Paragraph
                    pText={texts?.attributes.descriptionTwo}
                    classes="text-center  font-noto"
                  />
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="flex flex-col lg:w-[500px] pt-2 md:pt-24 lg:pt-16">
                  <Third />
                  <Titles
                    titleText={texts?.attributes.subtitleThree}
                    classes="font-bold font-noto text-2xl text-center"
                  />
                  <Paragraph
                    pText={texts?.attributes.descriptionThree}
                    classes=" text-center lg:px-32 md:px-52 font-noto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
