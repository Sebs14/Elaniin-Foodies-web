import React, {useEffect, useState} from "react";
import Customimg from "../../assets/mask_hero.svg"
import ArrowButton from "../common/arrowbutton/ArrowButton";
import Titles from "../common/titles/Titles";
import Paragraph from './../common/paragraph/Paragraph';
import getText from "../../Services/getText";

const Hero = () => {
  const hero = 'menu-heroes';
  const [texts, setTexts] = useState(null);

  const fetchText = async () => {
    const text = await getText(hero);
    setTexts(text[0]);
    // console.log(text[0].attributes);
  }

  useEffect(() => {
    fetchText()
  },[])
  return (
    <div className="flex md:flex-row flex-col lg:h-screen xl:h-[80vh]">
      <div className=" hidden md:block absolute top-0 right-0 z-0 lg:p-0">
        <img src={Customimg} alt="background hero hamburger" className=" xl:h-[75vh] lg:h-screen md:h-[350px]"></img>
      </div>
      <div className="block md:hidden">
        <img src={Customimg} alt="background hero hamburger" className=" lg:h-full md:h-[350px]"></img>
      </div>
      <div className="flex flex-col md:items-start items-start justify-center px-10 mb-5 md:mt-28 md:px-0 md:mb-10 md:w-10/12 md:ml-2 lg:ml-32  z-10">
        <div className=" inline bg-text bg-no-repeat bg-left-bottom bg-origin-padding md:pl-0 md:pb-2 pb-4 lg:w-full " >
          <Titles ids="target" titleText={texts?.attributes.title}  classes=" text text--zipping font-drukTextWide xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:text-left text-center justify-center  lg:w-5/12 md:w-8/12 w-11/12"/>
        </div>
        <Paragraph classes=" text-black/40 font-noto text-lg md:w-7/12 pl-4 pt-5 xl:text-xl " pText={texts?.attributes.subtitle}/>
        <ArrowButton text={
          texts?.attributes.ButtonText
        }/>
      </div>
     
    </div>
  );
};

export default Hero;
