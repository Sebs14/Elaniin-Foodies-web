import React, { useEffect } from "react";


import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Paragraph = ({ pText, classes}) => {

  useEffect(() =>{
    ScrollOut({
      targets: '.word',
      once: true
    });
    Splitting();
  }, [])
  
  return (
    <div>
      <h1 className={`${classes} text text--fading`} data-scroll="out" data-splitting="">
        {pText}
      </h1>
    </div>
  );
};


export default Paragraph