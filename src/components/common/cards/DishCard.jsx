import React from 'react'
import Titles from '../titles/Titles'
import Paragraph from './../paragraph/Paragraph';

const DishCard = ({dish, image, description, type, price}) => {
  return (
    <div className='flex flex-col max-w-[330px] hover:shadow-2xl rounded-xl mt-10 transform transition duration-300 hover:scale-110'>
        <img src={image} alt={dish} className=' hover:rounded-b-none max-w-[330px] min-h-[264px] max-h-[264px] rounded-xl'/>
        <Titles titleText={dish} classes="font-syne font-bold text-2xl pt-4 pl-5 pr-10"  />
        <Paragraph pText={description} classes="font-noto text-sm pl-5 pr-10" />
        <div className='flex justify-between items-center pt-10 pb-5 px-5'>
            <Paragraph pText={type}/>
            <div className='flex'>
              <Titles titleText="$" classes="font-drukTextWide bg-yellow-300 text-right w-fit rounded-l-lg"/>
              <Titles titleText={price} classes="font-drukTextWide bg-yellow-300 text-right w-fit rounded-r-lg"/>
            </div>
        </div>
    </div>
  )
}

export default DishCard