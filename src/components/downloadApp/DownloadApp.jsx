import React from 'react'
import Titles from '../common/titles/Titles'
import Mockup from '../../assets/mockup.png'
import First from '../../assets/first'
import Second from './../../assets/second';
import Paragraph from './../common/paragraph/Paragraph';
import Third from './../../assets/third';
import Vectorl from './../../assets/Vectorl';
import Vectorr from './../../assets/Vectorr';

const DownloadApp = () => {
  return (
    <div className=' bg-white'>
        <div className='lg:flex lg:justify-start lg:flex-row  lg:-space-x-96  flex flex-col justify-center lg:-space-y-0 -space-y-44 px-4'>
          <img className='relative lg:-top-32 lg:max-w-5xl -top-40 lg:pl-0 md:pl-32 pl-20' src={Mockup}/>  
          <div className='flex-col lg:pt-20 '>
            
            <div className=' bg-text bg-no-repeat bg-bottom bg-origin-padding px-10'>
              <Titles titleText="Obten más beneficios" classes="text-3xl font-bold font-drukTextWide text-center "/>
              <Titles titleText="Descarga nuestra App" classes="text-3xl font-bold font-drukTextWide text-center pb-4"/>
            </div>
            <div className='md:flex'>
              <div className='flex flex-col justify-center items-center pt-16'>
                <First />
                <Titles titleText="solicita rápido" classes="font-bold font-noto text-2xl text-center" />
                <Paragraph pText="Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies." classes="text-center px-6 pt-5 font-noto" />
              </div>
              <div className='flex flex-col justify-center items-center pt-16'>
                <Second />
                <Titles titleText="solicita rápido" classes="font-bold font-noto text-2xl text-center" />
                <Paragraph pText="Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies." classes="text-center px-6 pt-5 font-noto" />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center pt-16'>
              <Third />
              <Titles titleText="solicita rápido" classes="font-bold font-noto text-2xl text-center" />
              <Paragraph pText="Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies." classes="text-center lg:px-32 md:px-52 px-6 pt-5 font-noto" />
            </div>
          </div>        
        </div>
    </div>
  )
}

export default DownloadApp