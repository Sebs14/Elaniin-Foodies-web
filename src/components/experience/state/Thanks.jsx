import React from 'react'
import Buttons from '../../common/buttons/Buttons'
import Titles from '../../common/titles/Titles';
import mail from './../../../assets/mail';
import Paragraph from './../../common/paragraph/Paragraph';

const Thanks = () => {
  return (
    <div className="bg-black h-screen  justify-center ">
        <mail/>
        <Titles classes="font-drukTextWide text-4xl" titleText="Gracias por tus comentarios"/>
        <Paragraph classes="font-noto text-center text-white text-lg pt-5 px-4" pText="No te pierdas nuestras grandes ofertas y recibe notificaciones de todos nuestros restaurantes top via e-mail."/>
        <Buttons text="Conoce nuestro menu"/>
    </div>
  )
}

export default Thanks