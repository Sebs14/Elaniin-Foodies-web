import React, { useEffect } from "react";


import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Paragraph = ({ pText, classes, ids }) => {

  
  return (
    <div>
      <h1 className={classes} data-scroll="out" data-splitting="">
        {pText}
      </h1>
    </div>
  );
};


export default Paragraph