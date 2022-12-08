import React from 'react'
import Navbar from "../common/navbar/Navbar";
import Hero from "../hero/Hero";
import WhoIsF from "../whoisf/WhoIsF";
import Addresses from "../addresses/Addresses";

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhoIsF/>
        <Addresses/>
    </div>
  )
}

export default Main