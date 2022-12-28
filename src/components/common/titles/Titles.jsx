import React, { useEffect } from "react";


import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Titles = ({ titleText, classes}) => {


  useEffect(() =>{
    ScrollOut({
      targets: '.word',
      once: true
    });
    Splitting();
  }, [])
  
  return (
      <article title="titles">
        <h1 className={`${classes} title-animated text text--zipping`} data-scroll="out" data-splitting="">
          {titleText}
        </h1>
      </article>
  );
};

export default Titles;
