import React from 'react'
import Navbar from "../common/navbar/Navbar";
import Hero from "../hero/Hero";
import WhoIsF from "../whoisf/WhoIsF";
import Addresses from "../addresses/Addresses";
import Carousel from '../carousel/Carousel';
import Experience from "../experience/Experience"
import DownloadApp from '../downloadApp/DownloadApp'
import Footer from '../footer/Footer';

const Landing = () => {
  return (
    <div>
        <Navbar colorpage={'white'} colortext={'black'}/>
        <Hero/>
        <WhoIsF/>
        <Addresses/>
        <Carousel />
        <Experience/>
        <DownloadApp />
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Landing