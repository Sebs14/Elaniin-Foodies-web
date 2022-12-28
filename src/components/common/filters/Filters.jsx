import React, { useState } from "react";
import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";
import Filter from "../../../assets/filter.svg";

const Filters = ({setSelectedCategory , categories, }) => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);  
  };
  const handleCategoryClick = (e) => {
    setSelectedCategory(e.target.value) 
    setNav(!nav);
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex lg:flex-row md:flex-col w-full justify-center items-center">
        <div>
          <ul className="md:flex items-center justify-center hidden font-syne text-lg font-bold">
          {categories.map( category => (
            <li key={category.name} className="lg:pl-20">
              <button key={category.name}  onClick={handleCategoryClick} value={category.id} className=" hover:text-yellow-300 hover:underline ">
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
          ? "md:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center  h-full bg-black text-white text-center ease-in duration-500 z-40"
          : "md:hidden fixed top-0 left-[200%] right-0 bottom-0 flex justify-center items-center h-full bg-black text-white text-center ease-in duration-500 z-40"
      }>
        <div className="absolute top-12 left-4">
          <img src={Filter}/>
        </div>
        <div onClick={handleNav} className=" absolute top-6 right-0 text-white py-6 px-5 z-50">
            <AiOutlineClose size={20} /> 
        </div>
        <ul className="absolute top-36 left-4 font-syne font-bold text-left space-y-10 text-2xl">
        {categories.map( category => (
          <li key={category.name} className="lg:pl-10">
            <button key={category.name} onClick={handleCategoryClick} value={category.id} className=" hover:text-yellow-300 hover:underline ">
              {category.name}
            </button>
          </li>
          ))
        }
          </ul>
      </div>
    </div>
  );
};

export default Filters;


