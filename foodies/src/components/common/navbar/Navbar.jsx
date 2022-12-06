import React, { useState } from "react";
import FoodiesLogo from "../../../assets/foodies.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div  className='lg:pl-[101px] lg:pt-[57px] md:pl-[40px] md:pt-[30px] pl-[16px] pt-[47px] w-full ease-in duration-300'>
        <div className='flex md:justify-start justify-between items-center  '>
            <a href='/'>
                <img src={FoodiesLogo} alt='foodies logo' className=" z-50" />
            </a>
            <ul className='hidden sm:flex font-syne font-bold'>
                <li className='p-4'>
                    <a href='/'>Acerca de</a>
                </li>
                <li  className='p-4'>
                    <a href='/'>Restaurantes</a>
                </li>
                <li  className='p-4'>
                    <a href='/'>Menú</a>
                </li>
                <li  className='p-4'>
                    <a href='/'>Contáctanos</a>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='sm:block sm:hidden z-10 pr-[16px]'>
                {nav ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.266 5.73405C20.6891 6.15712 20.6891 6.84305 20.266 7.26611L7.26603 20.2661C6.84296 20.6892 6.15703 20.6892 5.73397 20.2661C5.3109 19.843 5.3109 19.1571 5.73397 18.734L18.734 5.73405C19.157 5.31098 19.843 5.31098 20.266 5.73405Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73397 5.73405C6.15703 5.31098 6.84296 5.31098 7.26603 5.73405L20.266 18.734C20.6891 19.1571 20.6891 19.843 20.266 20.2661C19.843 20.6892 19.157 20.6892 18.734 20.2661L5.73397 7.26611C5.3109 6.84305 5.3109 6.15712 5.73397 5.73405Z" fill="black"/>
                </svg> : <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.25 13H22.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.25 6.5H22.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.25 19.5H22.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                 }
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 flex font-syne font-bold justify-start items-center w-full h-3/4 bg-white rounded-b-[30px] shadow-2xl text-left ease-in duration-300 ' : 'sm:hidden absolute top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
         
                  <ul>
                    <li>
                      <a href='/'>
                      <img src={FoodiesLogo} alt='foodies logo' className=" absolute top-[47px] left-[16px]" />
                      </a>
                    </li>
                    <li onClick={handleNav} className='pl-[16px] pb-[50px] text-4xl hover:text-gray-500'>
                        <a href='/'>Acerca de</a>
                    </li>
                    <li onClick={handleNav} className='pl-[16px] pb-[50px] text-4xl hover:text-gray-500'>
                        <a href='/'>Restaurantes</a>
                    </li>
                    <li onClick={handleNav} className='pl-[16px] text-4xl hover:text-gray-500'>
                        <a href='/'>Contáctanos</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
