import React, { useState, useEffect } from 'react'
import Titles from '../common/titles/Titles'
import Hamburger from '../../assets/menu_hero.png'
import SmallHamburger from '../../assets/small_menu_hero.png'
import Subtract from '../../assets/subtract.png'
import HeroHam from '../../assets/hero_hamburger.png'
import getText from '../../Services/getText'

const MenuHero = () => {
  const [texts, setTexts] = useState(null);

  const fetchText = async () => {
    const text = await getText('hero-menus');
    setTexts(text[0]);
    
  }

  useEffect(() => {
    fetchText();
  }, [])

  return (
    <div className='lg:h-[75vh] md:h-[50vh] h-[75vh] bg-black md:flex md:justify-between'>
        <img src={import.meta.env.VITE_STRAPI_URL + texts?.attributes.smallHamburger.data.attributes.url} alt="small hamburger hero" className="lg:static absolute top-0 right-0 md:hidden "/>
        <div className=' md:static  flex flex-col justify-center md:w-2/4  lg:px-24 px-5 lg:pt-0 md:pt-0 pt-96'>
            <Titles classes="text-white lg:text-6xl text-4xl font-drukTextWide " titleText={texts?.attributes.title}/>
            <Titles classes="text-black lg:text-6xl text-4xl font-drukTextWide bg-text bg-no-repeat bg-left-bottom bg-origin-padding bg-cover max-w-fit" titleText={texts?.attributes.secondTitle}/>
        </div>
        <img src={import.meta.env.VITE_STRAPI_URL + texts?.attributes.hamburger.data.attributes.url} className="lg:block hidden"/>
        <img src={import.meta.env.VITE_STRAPI_URL + texts?.attributes.subtract.data.attributes.url} className="lg:hidden md:block hidden"/>
        <img src={import.meta.env.VITE_STRAPI_URL + texts?.attributes.heroHam.data.attributes.url} className="lg:hidden md:block hidden absolute right-20 top-40"/>
        
    </div>
  )
}

export default MenuHero