import React from 'react'
import Titles from '../titles/Titles'
import Paragraph from './../paragraph/Paragraph';

const DishCard = ({id, dish, image, description, price}) => {
  

  const priceInDollars = (price/ 100).toLocaleString("en-US", {style:"currency", currency:"USD"});

  return (
    <div key={id} className='flex flex-col max-w-[330px] hover:shadow-2xl mx-10 mb-10 rounded-xl transform transition duration-300 group hover:scale-110'>
      <div className='max-w-[330px] min-h-[264px] max-h-[264px]'>
        <img src={image} alt={dish} className=' group-hover:rounded-b-none object-cover h-full w-full rounded-xl'/>
      </div>    
      <Titles data-testid="name" titleText={dish} classes="font-syne font-bold text-2xl pt-4 pl-5 pr-10"  />
      <Paragraph pText={description} classes="font-noto text-sm pl-5 pr-10" />
      <div className='flex justify-between items-center pt-10 pb-5 px-5'>
        <div className='flex absolute right-2 bottom-7'>
          <Titles titleText={priceInDollars} classes="font-drukTextWide bg-yellow-300 text-right w-fit rounded-lg"/>
        </div>
      </div>
    </div>
  )
}

export default DishCard