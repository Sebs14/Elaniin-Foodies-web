import React, { useState } from "react";
import Titles from "../common/titles/Titles";
import Paragraph from "../common/paragraph/Paragraph";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import LeftSide from "../../assets/left_side.jsx"
import RightSide from "../../assets/right_side";
import Ketchup from "../../assets/testimonials_bg_ketchup.png"

const sliderData = [
  {
    id: 1,
    title: '"El mejor lugar para degustar en familia y amigos"',
    text: "es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.",
  },
  {
    id: 2,
    title: '"El mejor lugar para comer con mi novia"',
    text: "es el mejor lugar para tener una cena romantica",
  },
  {
    id: 3,
    title: '"El mejor lugar para ir con mi perro y comer"',
    text: "es el mejor lugar al que he venido con mi perro, tienen lugares para que el se sienta comodo y pueda jugar con otros perros.",
  },
  {
    id: 4,
    title: '"El mejor lugar para comer con los panas"',
    text: "Puedes ver partidos del mundial y te dan cerveza si tu equipo gana",
  },
  {
    id: 5,
    title: '"Buen lugar para poder ir a disfrutar"',
    text: "Mi novia me lo recomendo el lugar, y vaya que si saben atender a las personas en este restaurante",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  return (
    <div id="carousel" className="flex-col max-w-full px-4 py-16 relative flex justify-center items-center lg:h-[75vh] h-[65vh]  ">
      
      <LeftSide/>
      <RightSide/>
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100 flex justify-center" : "opacity-0"}>
          {index === slide && (
            <div className="flex flex-col justify-center w-3/4 z-10">
              <Titles
                classes="text text--zipping font-drukTextWide text-center lg:text-4xl md:text-3xl text-xl"
                titleText={item.title}
              />
              <Paragraph
                classes="font-noto text-lg text-black/50 text-center pt-2"
                pText={item.text}
              />
            </div>
          )}
          
        </div>
        
      ))}
      <div className="flex pt-8 pb-5 ">
          <IoIosArrowBack onClick={nextSlide } size={50} className="pr-4 hover:text-yellow-300"/>
          <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText={slide + 1 } />
          <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText="/"/>
          <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText={sliderData.length} />
          <IoIosArrowForward onClick={prevSlide} size={50} className="pl-4 hover:text-yellow-300"/>
      </div>

      <img src={Ketchup} className="absolute -bottom-36 right-0 hidden lg:block z-0" />
      
    </div>
  );
};

export default Carousel;
