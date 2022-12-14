import React, { useState } from "react";

import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";
import Titles from './../titles/Titles';
import Filter from "../../../assets/filter.svg";

const Filters = ({setSelectedCategory , categories, }) => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };
  const handleCategoryClick = (e) => {
    setSelectedCategory(e.target.value) 
    console.log("hola2", e)
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex lg:flex-row md:flex-col w-full justify-center items-center">
        <div>
        <ul className="md:flex  hidden font-syne text-lg space-x-4 font-bold">
         {categories.map( category => (
          <li className="lg:pl-10">
            <button onClick={handleCategoryClick} value={category.id} className=" hover:text-yellow-300 hover:underline ">
              {category.name}
            </button>
          </li>
          ))
        }
        </ul>
        </div>
      </div>
      <div onClick={handleNav} className="md:block md:hidden text-black py-6 px-5 z-40">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineFilter size={20} />}
      </div>
      <div className={
        nav
          ? "lg:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center  h-full bg-black text-white text-center ease-in duration-500 z-40"
          : "lg:hidden fixed top-0 left-[200%] right-0 bottom-0 flex justify-center items-center h-full bg-black text-white text-center ease-in duration-500"
      }>
        <div className="absolute top-12 left-4">
          <img src={Filter}/>
        </div>
        <div onClick={handleNav} className=" absolute top-6 right-0 text-white py-6 px-5 z-50">
            <AiOutlineClose size={20} /> 
        </div>
        <ul className="absolute top-36 left-4 font-syne font-bold text-left text-2xl">
            <li onClick={handleNav} className="hover:text-gray-500">
              <button >Todos</button>
            </li>
            <li onClick={handleNav} className="py-12 hover:text-gray-500">
              <button >Las Tradicionales</button>
            </li>
            <li className="pb-12 hover:text-gray-500">
              <button >Recomendaciones</button>
            </li>
            <li onClick={handleNav} className=" hover:text-gray-500">
              <button >Para compartir</button>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Filters;


