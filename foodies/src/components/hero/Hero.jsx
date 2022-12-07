import React from "react";
import arrow from "../../assets/arrow-right.svg";
import Customimg from "../../assets/mask_hero.svg"
import Bgtext from "../../assets/bg_text.svg"
import ArrowButton from "../common/arrowbutton/ArrowButton";
import Titles from "../common/titles/Titles";

const Hero = () => {
  return (
    <div className="flex lg:pl-[102px] lg:pt-[267px] md:pl-[53px] md:pt-[184px] pt-[431px] pl-5 pr-3 h-screen">
      <div className=" absolute top-0 right-0 z-0">
        <img src={Customimg} alt="background hero hamburger" className=" lg:h-full md:h-[500px]"></img>
      </div>
      <div className="flex flex-col z-10 pt-10">
        <div className=" inline bg-text bg-no-repeat bg-left-bottom bg-origin-padding  md:pl-4 md:pb-2 lg:w-full p-4  " >
          <Titles ids="target" titleText={"Un nuevo sabor esta en la ciudad"}  classes=" font-drukTextWide lg:text-6xl md:text-5xl text-4xl justfy-center lg:w-8/12 md:w-8/12 w-11/12 "/>
        </div>
        <p className=" text-black/40 font-noto text-lg md:w-7/12 pl-4 pt-5">
          Estamos a punto de descubrir un mundo lleno de sabores
        </p>
        <p className=" text-black/40 font-noto text-lg pl-[15px]">
          y de emociones inigualables.
        </p>
        <ArrowButton text="Encuentranos"/>
      </div>
     
    </div>
  );
};

export default Hero;
