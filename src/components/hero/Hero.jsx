import React from "react";
import arrow from "../../assets/arrow-right.svg";
import Customimg from "../../assets/mask_hero.svg"
import Bgtext from "../../assets/bg_text.svg"
import ArrowButton from "../common/arrowbutton/ArrowButton";
import Titles from "../common/titles/Titles";

const Hero = () => {
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
          <Titles ids="target" titleText={"Un nuevo sabor esta en la ciudad"}  classes=" text text--zipping font-drukTextWide xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:text-left text-center justify-center  lg:w-5/12 md:w-8/12 w-11/12"/>
        </div>
        <p className=" text-black/40 font-noto text-lg md:w-7/12 pl-4 pt-5 xl:text-xl ">
          Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.
        </p>
        <ArrowButton text="Encuentranos"/>
      </div>
     
    </div>
  );
};

export default Hero;
