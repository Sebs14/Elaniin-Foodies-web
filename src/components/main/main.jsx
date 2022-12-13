import React from 'react'
import Navbar from "../common/navbar/Navbar";
import Hero from "../hero/Hero";
import WhoIsF from "../whoisf/WhoIsF";
import Addresses from "../addresses/Addresses";
import Carousel from '../carousel/Carousel';
import Experience from "../experience/Experience"
import DownloadApp from '../downloadApp/DownloadApp'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhoIsF/>
        <Addresses/>
        <Carousel />
        <Experience/>
        <DownloadApp />
    </div>
  )
}

export default Main