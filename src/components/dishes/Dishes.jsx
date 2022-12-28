import React from 'react'
import NumberButton from '../common/buttons/NumberButton'
import DishCard from '../common/cards/DishCard';
import Filters from '../common/filters/Filters'
import Buttons from './../common/buttons/Buttons';
import getMyDish from './../../Services/Dishes';
import getCategories from '../../Services/getCategory';
import { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import NoDishes from './state/NoDishes';

const Dishes = () => {
  const [categories, setCategories] = useState([
    {
      id: '',
      name: 'Todas',
      slug: 'todas',
    },
  ])
  const [currentPage, setCurrentPage] = useState()
  const [page, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [dish, setDish] = useState(1)
  const [input, setInput] = useState("")
  
  const handlePagesNext = () => {
    setPage((prev) => prev + 1)
  }
  
  const handlePagesPrevious = () => {
    setPage((prev) => prev - 1)
  }
  
  const fetchMeta = async () => {
    const response = await getMyDish(page, selectedCategory, input)
    setCurrentPage(response.meta)
  }
  
  const fetchCategory = async () => {
    const response = await getCategories()
    setCategories([...categories,...response])
  }
  
  const fetchDishes = async () => {
    const response = await getMyDish(page, selectedCategory, input)
    setDish(response.data)
  }

  useEffect(() =>{
    fetchMeta()
    fetchCategory()
  },[])
  
  useEffect(() =>{
    fetchDishes()
  },[selectedCategory, page])
  
  console.log({page})
  
  console.log(currentPage?.last_page)

  return (
    <div className='h-full flex flex-col justify-center items-center'>
        <div className='flex lg:flex-row md:flex-col justify-center'>
          <form className="lg:px-8  md:px-40  md:block md:w-full pl-4 py-20 w-11/12 ">
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === "Enter"){
                    e.preventDefault()
                    fetchDishes()
                  }
                } }
                type="search"
                id="default-search"
                className="default-search rounded-lg block w-full p-4 pl-10 text-sm font-noto text-black border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Busca tu platillo favorito..."
                required
              />
            </div>
          </form>
          <Filters key={categories.id} setSelectedCategory={setSelectedCategory} categories={categories} />
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 '>
          {dish.length > 0 ? (
            dish.map( dish => (
              <DishCard key={dish.id} price={dish.price} dish={dish.title} image={dish.image} description={dish.description} />
            ))
          ): (
            <div className='flex justify-center items-center w-screen'>
              <NoDishes />
            </div>
          )

          }
        </div>
        <div className='flex items-center justify-center space-x-4 pt-10'>
          {currentPage != undefined ? ( 
            page > 1 ? ( 
              <Buttons classes={"relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-yellow-300 group"} click={handlePagesPrevious} text={"anterior"}/>   
              ) : ("")
            ): ""
          } 
          <NumberButton page="1"/>  
          {currentPage != undefined ? (
            page < currentPage?.last_page ? ( 
              <Buttons classes={"relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-yellow-300 group"} click={handlePagesNext} text={"siguiente"}/>   
              ) : ("")
              ) : "" 
          }     
        </div>
    </div>
  )
}

export default Dishes