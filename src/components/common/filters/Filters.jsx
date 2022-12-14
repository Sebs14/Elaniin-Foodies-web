import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";
import Titles from './../titles/Titles';
import Filter from "../../../assets/filter.svg";

const Filters = ({todas, tradicional, compartir, recomendado}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex lg:flex-row md:flex-col w-full justify-center items-center">
        <form className="lg:px-8 lg:w-1/4 md:px-40 md:w-full md:block   pl-4 py-6 w-11/12 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search Dish
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch size={"16px"} />
            </div>
            <input
              type="search"
              id="default-search"
              className="default-search rounded-lg block w-full p-4 pl-10 text-sm font-noto text-black border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Busca tu platillo favorito..."
              required
            />
          </div>
        </form>
        <div>
        <ul className="md:flex  hidden font-syne text-lg space-x-4 font-bold">
          <li className="lg:pl-10">
            <button onClick={todas} className=" hover:text-yellow-300 hover:underline ">
              Todas
            </button>
          </li>
          <li className="lg:pl-10">
            <button
              onClick={tradicional}
              className=" hover:text-yellow-300 hover:underline"
            >
              Las tradicionales
            </button>
          </li>
          <li className="lg:pl-10">
            <a href="/menu" className={" hover:text-yellow-300 hover:underline"}>
              Menú
            </a>
          </li>
          <li className="lg:pl-10">
            <button
              onClick={recomendado}
              className=" hover:text-yellow-300  hover:underline"
            >
              Recomendaciones
            </button>
          </li>
          <li className="lg:pl-10">
            <button
              onClick={compartir}
              className=" hover:text-yellow-300  hover:underline"
            >
              Para compartir
            </button>
          </li>
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


