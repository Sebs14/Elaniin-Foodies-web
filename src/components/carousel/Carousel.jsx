import React, { useState, useEffect } from "react";
import Titles from "../common/titles/Titles";
import Paragraph from "../common/paragraph/Paragraph";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import LeftSide from "../../assets/left_side.jsx"
import RightSide from "../../assets/right_side";
import Ketchup from "../../assets/testimonials_bg_ketchup.png"
import getText from "../../Services/getText";

const Carousel = () => {
  const [sliderData, setSliderData] = useState([]);
  const [slide, setSlide] = useState(0);
  const length = sliderData?.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  const fetchData = async () => {
    const data = await getText('data-sliders')
    setSliderData(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div id="carousel" className="flex-col max-w-full px-4 py-16 relative flex justify-center items-center lg:h-[75vh] h-[65vh]  ">
        <LeftSide/>
        <RightSide/>
        {sliderData?.map((item, index) => (
          <div key={item.id} className={index === slide ? "opacity-100 flex justify-center" : "opacity-0"}>
            {index === slide && (
              <div className="flex flex-col justify-center w-3/4 z-10">
                <Titles
                  classes="font-drukTextWide text-center lg:text-4xl md:text-3xl text-xl"
                  titleText={item.attributes.title}
                />
                <Paragraph
                  classes="font-noto text-lg text-black/50 text-center pt-2"
                  pText={item.attributes.subtitle}
                />
              </div>
            )}
            
          </div>
          
        ))}
        
        <img src={Ketchup} alt="ketchup carousel" className="absolute -bottom-36 right-0 hidden lg:block z-0" />
        </div>
        <div className="flex justify-center relative bottom-10">
            <IoIosArrowBack onClick={nextSlide } size={50} className="pr-4 hover:text-yellow-300"/>
            <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText={slide + 1 } />
            <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText="/"/>
            <Paragraph classes="font-noto text-2xl text-black text-center pt-2" pText={sliderData.length} />
            <IoIosArrowForward onClick={prevSlide} size={50} className="pl-4 hover:text-yellow-300"/>
        </div>
    </div>
  );
};

export default Carousel;
