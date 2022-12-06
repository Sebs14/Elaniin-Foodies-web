import React from "react";
import arrow from "../../assets/arrow-right.svg";
import Customimg from "../../assets/mask_hero.svg"
import Bgtext from "../../assets/bg_text.svg"

const Hero = () => {
  return (
    <div className="flex lg:pl-[102px] lg:pt-[267px] md:pl-[53px] md:pt-[184px] pt-[431px] pl-5 pr-3 h-screen">
      <div className="absolute top-0 right-0 z-0">
        <img src={Customimg} alt="background hero hamburger"></img>
      </div>
      <div className="flex flex-col z-10">
        <div className=" inline bg-text bg-no-repeat bg-left-bottom bg-origin-padding  md:pl-[13.79px] md:pb-[9px] lg:w-full w-3/4">
          <h1 className=" font-drukTextWide lg:text-6xl md:text-[40px] text-[35px] md:w-5/12 w-3/4">
            Un nuevo sabor esta en la ciudad
          </h1>
        </div>
        <p className=" text-black/40 font-noto text-lg pl-[15px] pt-[18.7px]">
          Estamos a punto de descubrir un mundo lleno de sabores
        </p>
        <p className=" text-black/40 font-noto text-lg pl-[15px]">
          y de emociones inigualables.
        </p>
        <a href="/" className=" max-w-fit">
          <div className="flex items-center pl-[15px] pt-[46px]">
            <h3 className=" font-syne font-bold  text-[22px]">Encuentranos </h3>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
     
    </div>
  );
};

export default Hero;
