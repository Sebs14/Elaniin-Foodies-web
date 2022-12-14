import React from 'react'
import NoImg from '../../../assets/no_address.svg'
import Titles from '../../common/titles/Titles'

const NoAddress = () => {
  return (
    <div className='flex flex-col justify-center items-center md:text-3xl text-xl text-center'>
        <img src={NoImg}/>
        <Titles titleText="¡No hemos encontrado lo que buscas!" classes="font-syne font-bold pt-2 px-5 md:px-40 "/>
    </div>
  )
}

export default NoAddress