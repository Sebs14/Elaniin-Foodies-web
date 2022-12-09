import React, { useRef, useEffect } from "react";


import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Titles = ({ titleText, classes, ids }) => {


  useEffect(() =>{
    ScrollOut({
      targets: '.word',
      once: true
    });
    Splitting();
  }, [])
  
  return (
    <div>
      <h1 id={ids} className={classes} data-scroll="out" data-splitting="">
        {titleText}
      </h1>
    </div>
  );
};

export default Titles;
