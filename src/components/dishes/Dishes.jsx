import React from 'react'
import NumberButton from '../common/buttons/NumberButton'
import DishCard from '../common/cards/DishCard';
import Filters from '../common/filters/Filters'
import Buttons from './../common/buttons/Buttons';
import getMyDish from './../../Services/Dishes';
import { useState, useEffect } from 'react';

const Dishes = () => {
  const [category, setCategory] = useState("")
  // const [page, setPage] = useState(1)
  const [dish, setDish] = useState(null)

  const compartirClick = () =>{
    setCategory("44052953-f490-4986-a8d3-7b832cb26aaf")
    
  }

  const recomendadoClick = () =>{
    setCategory("a70594d0-e5a0-4160-869a-476b6322c804")
    
  }

  const tradicionalClick = () =>{
    setCategory("63b133da-b695-43f9-802b-c846d0bfb7b9")
    
  }

  const todasClick = () =>{
    setCategory(null)
    
  }
  console.log(category)
  // const pageOneClick = () =>{
  //   setPage(1)
  // }
  // const pageTwoClick = () =>{
  //   setPage(2)
  // }
  // const pageThreeClick = () =>{
  //   setPage(3)
  // }
  // const pageFourClick = () =>{
  //   setPage(4)
  // }
  
  // <Filters/ >
  const fetchDishes = async () => {
    // setCategory("44052953-f490-4986-a8d3-7b832cb26aaf")
    
    const response = await getMyDish(1, category)
    setDish(response)

  }

  useEffect(() =>{
    fetchDishes()
  },[category])

  return (
    <div className='h-full'>
      <Filters tradicional={tradicionalClick} compartir={compartirClick} recomendado={recomendadoClick} todas={todasClick}/>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-center grid-cols-1 px-4 space-x-2 pt-24 pl-32'>
          {dish != null ? (
            dish.map( dish => (
              <DishCard price={dish.price} dish={dish.title} image={dish.image} description={dish.description} type={dish.categories.name} />
            ))
          ): ('no dish')

          }
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <NumberButton  page="1"/>
          <NumberButton  page="2"/>   
          <NumberButton  page="3"/>   
          <NumberButton  page="4"/>
          <Buttons text="siguiente"/>          
        </div>
    </div>
  )
}

export default Dishes