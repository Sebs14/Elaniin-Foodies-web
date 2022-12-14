import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../common/navbar/Navbar'
import MenuHero from '../menuHero/MenuHero'
import Dishes from '../dishes/Dishes'

const Menu = () => {
  return (
    <div>
        <Navbar colorpage={'black'} colortext={'white'}/>
        <MenuHero />
        <Dishes />
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Menu