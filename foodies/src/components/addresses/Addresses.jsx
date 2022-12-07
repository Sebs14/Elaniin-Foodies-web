import React from 'react'
import Titles from '../common/titles/Titles'
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import AddresBox from '../common/addresBox/AddresBox';

const Addresses = () => {
  return (
    <div className=' '>
      <Titles ids="targetD" titleText={"Estamos para ti"} classes="font-drukTextWide font-bold md:text-5xl text-4xl md:w-full pl-4 w-1/2 pt-6" />
      <div className='flex pt-10'>
        <div className='flex justify-center items-center w-1/2 bg-black text-white py-4'>
          <IoFastFoodOutline size={"30px"}/>
          <h3 className=' text-center font-syne font-bold text-lg pl-2'> Para llevar </h3>
        </div>
        <div className='flex justify-center items-center w-1/2 bg-white text-black py-4'>
          <TbTruckDelivery size={"30px"}/>
          <h3 className=' text-center font-syne font-bold text-lg pl-2'> Domicilio </h3>
        </div>
      </div>
      <form>
        <label for="default-search" className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search restaurant</label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <BsSearch size={"16px"}/>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm font-noto " placeholder="Buscar nombre o dirección..." required />
        </div>
      </form>
      <AddresBox place={"San Benito"} time="12:00 m.d. - 9:00 p.m." address={"Calle la Reforma #543, Colonia San Benito"}/>
    </div>
  )
}

export default Addresses