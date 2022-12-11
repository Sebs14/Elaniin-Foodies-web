import React from 'react'
import Titles from '../common/titles/Titles'
import Paragraph from '../common/paragraph/Paragraph'

const Experience = () => {
  return (
    <div className='bg-black h-screen  justify-center '>
        <Titles classes="text text--zipping font-drukTextWide text-center text-white text-4xl pt-20" titleText="Cuentanos tu experiencia"/>
        <Paragraph classes="font-noto text-center text-white text-lg pt-5 px-4" pText="No te pierdas nuestras grandes ofertas y recibe notificaciones de todos nuestros restaurantes top via e-mail."/>
        <form className=' flex flex-col space-y-2 justify-center px-4 pt-10'>
            <span class="font-noto text-sm text-white">Nombre y Apellido</span>
            <input placeholder='John Doe' className='bg-black font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 '/>
            <span class="font-noto text-sm text-white">Correo electrónico</span>
            <input placeholder='john.doe@elaniin.com' className='bg-black font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 '/>
            <span class="font-noto text-sm text-white">Mensaje</span>
            <textarea rows="4" placeholder='El día de ahora mi experiencia fue...' className='bg-black  font-noto outline-none text-white py-3 rounded px-5 border-white focus:border-yellow-300 focus:text-yellow-300 '/>
            <div className='flex justify-center pt-10'>
                <button className='bg-yellow-300 py-3 px-10 font-noto font-bold'>Enviar comentarios</button>
            </div>
        </form>
    </div>
  )
}

export default Experience