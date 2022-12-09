import React, { useEffect, useState } from "react";
import FoodiesLogo from "../../../assets/foodies.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('white')
        } else {
            setColor('transparent')
        }
    }
    window.addEventListener('scroll', changeColor)
}, []);

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-20 ease-in duration-300">
      <div className="flex items-center lg:justify-start justify-between pb-2 lg:pl-28 lg:pt-14 md:pl-10 md:pt-8 pl-4 pt-12 md:pr-11 pr-5">
        <a href="/">
          <img src={FoodiesLogo}  className="w-min-fit"/>
        </a>
        <ul className="lg:flex  hidden font-syne font-bold">
          <li className="pl-20">
            <a href="/" className=" hover:text-lime-900 hover:underline">Acerca de</a>
          </li>
          <li className="pl-10">
            <a href="/" className=" hover:text-lime-900 hover:underline">Restaurantes</a>
          </li>
          <li className="pl-10">
            <a href="/" className=" hover:text-lime-900 hover:underline">Menú</a>
          </li>
          <li className="pl-10">
            <a href="/" className=" hover:text-lime-900 hover:underline">Contáctanos</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="lg:block lg:hidden  z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-500"
              : "lg:hidden absolute top-0 left-[200%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-500"
          }
        >
          <a href="/" className=" absolute top-12 left-4">
            <img src={FoodiesLogo}  className="w-min-fit"/>
          </a>
          <ul className="absolute top-36 left-4 font-syne font-bold text-left text-2xl">
          
            <li
              onClick={handleNav}
              className="  hover:text-gray-500"
            >
              <a href="/">Acerca de</a>
            </li>
            <li
              onClick={handleNav}
              className=" py-12 hover:text-gray-500"
            >
              <a href="/#aboutme">Restaurantes</a>
            </li>
            <li
              onClick={handleNav}
              className=" hover:text-gray-500"
            >
              <a href="/#work">Contáctenos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
