import React from 'react'
import Crazy from '../../../assets/crazy_hamburger.svg'
import Paragraph from '../../common/paragraph/Paragraph'
import Titles from '../../common/titles/Titles'

const NoDishes = () => {
  return (
    <div className='flex flex-col justify-center items-center md:px-20 text-center px-14'>
        <img src={Crazy}/>
        <Titles titleText="¡Platillos no encontrados!" classes="text-xl font-syne font-bold"/>
        <Paragraph pText="Te invitamos a que verifiques si el nombre esta bien escrito o prueba buscando un nuevo platillo" classes="font-noto text-lg "/>
    </div>
  )
}

export default NoDishes