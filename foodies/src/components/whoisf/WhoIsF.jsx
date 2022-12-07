import React from "react";
import ArrowButton from "../common/arrowbutton/ArrowButton";
import Titles from "../common/titles/Titles";

const WhoIsF = () => {
  return (
    <div className=" lg:flex justify-center ">
      <div className="bg-whois bg-no-repeat bg-cover lg:h-[565px] lg:w-[60%] h-[565px] w-full lg:text-5xl text-4xl">
        <div className="lg:pt-[404px] lg:pr-[40px] md:pt-[445px] md:pr-[53px] pt-[430px] px-4 flex flex-col">
         <Titles ids="targetB"  titleText={"LA COMIDA ES"} classes=" font-drukTextWide text-white text-right "/>
         <Titles ids="targetC"  titleText={"NUESTRO ARTE"} classes="font-drukTextWide text-[#FFD600] text-right"/>
        </div>
      </div>
      <div className=" flex flex-col  lg:w-[40%] md:h-[565px] w-full bg-flow bg-no-repeat bg-center bg-cover">
        <h2 className="font-syne font-bold text-2xl lg:pl-10 md:px-12 lg:pt-40 pt-16 pl-4">
          {" "}
          ¿Quién es Foodies?{" "}
        </h2>
        <p className=" font-noto text-black/50 lg:px-10 md:px-12 text-justify text-lg pt-7 px-4">
          Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
          reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
          consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure
          eiusmod minim occaecat et id minim ullamco.
        </p>
        <ArrowButton text="Contáctanos"/>
       
      </div>
    </div>
  );
};

export default WhoIsF;
