import React from 'react'
import Buttons from '../../common/buttons/Buttons'
import Titles from '../../common/titles/Titles';
import Mail from './../../../assets/mail';
import Paragraph from './../../common/paragraph/Paragraph';

const Thanks = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='pt-24 '>
          <Mail/>
        </div>
        <Titles classes="font-drukTextWide text-4xl text-white text-center pt-5" titleText="Gracias por tus comentarios"/>
        <Paragraph classes="font-noto text-center text-white text-lg pt-5" pText="No te pierdas nuestras grandes ofertas y recibe notificaciones de todos nuestros restaurantes top via e-mail."/>
        <div className='pt-8'>
          <a href='/menu'>
            <Buttons text="Conoce nuestro menu"/>
          </a>
        </div>
    </div>
  )
}

export default Thanks