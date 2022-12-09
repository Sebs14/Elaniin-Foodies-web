import React, { useState } from "react";
import Titles from "../common/titles/Titles";
import Paragraph from "../common/paragraph/Paragraph";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"


const sliderData = [
  {
    id: 0,
    title: '"El mejor lugar para degustar en familia y amigos"',
    text: "es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.",
  },
  {
    id: 1,
    title: '"El mejor lugar para comer con mi novia"',
    text: "es el mejor lugar para tener una cena romantica",
  },
  {
    id: 2,
    title: '"El mejor lugar para ir con mi perro y comer"',
    text: "es el mejor lugar al que he venido con mi perro, tienen lugares para que el se sienta comodo y pueda jugar con otros perros.",
  },
  {
    id: 3,
    title: '"El mejor lugar para comer con los panas"',
    text: "Puedes ver partidos del mundial y te dan cerveza si tu equipo gana",
  },
  {
    id: 4,
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
    <div className="flex-col max-w-full mx-auto px-4 py-16 relative flex justify-center items-center">
      
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <div>
              <Titles
                classes="text text--zipping font-drukTextWide text-center text-4xl"
                titleText={item.title}
              />
              <Paragraph
                classes="font-noto text-lg text-black/30 text-center pt-2"
                pText={item.text}
              />
            </div>
          )}
        </div>
      ))}
      <div className="flex pt-8 pb-5 ">
        <IoIosArrowBack onClick={prevSlide} size={50} className="pr-4 hover:text-yellow-300"/>
        <IoIosArrowForward onClick={nextSlide} size={50} className="pl-4 hover:text-yellow-300"/>
      </div>
    </div>
  );
};

export default Carousel;
