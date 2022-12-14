import React from 'react'
import Titles from '../common/titles/Titles'
import Hamburger from '../../assets/menu_hero.png'
import SmallHamburger from '../../assets/small_menu_hero.png'
import Subtract from '../../assets/subtract.png'
import HeroHam from '../../assets/hero_hamburger.png'

const MenuHero = () => {
  return (
    <div className='lg:h-[75vh] md:h-[50vh] h-[75vh] bg-black md:flex md:justify-between'>
        <img src={SmallHamburger} className="lg:static absolute top-0 right-0 md:hidden "/>
        <div className=' md:static  flex flex-col justify-center  lg:px-24 px-5 lg:pt-0 md:pt-0 pt-96'>
            <Titles classes="text-white lg:text-6xl text-4xl font-drukTextWide " titleText="Cada sabor es una nueva"/>
            <Titles classes="text-black lg:text-6xl text-4xl font-drukTextWide bg-text bg-no-repeat bg-left-bottom bg-origin-padding bg-cover max-w-fit" titleText="experiencia"/>
        </div>
        <img src={Hamburger} className="lg:block hidden"/>
        <img src={Subtract} className="lg:hidden md:block hidden"/>
        <img src={HeroHam} className="lg:hidden md:block hidden absolute right-20 top-40"/>
        
    </div>
  )
}

export default MenuHero