import React from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const Titles = ({ titleText, classes, ids }) => {
   const text = new SplitType("#target");
   const textB = new SplitType("#targetB");
   const textC = new SplitType("#targetC");
   const characters = document.querySelectorAll(".char");

   for (let i = 0; i < characters.length; i++) {
     characters[i].classList.add("translate-y-full");
   }

   gsap.to(".char", {
     y: 0,
     stagger: 0.05,
     delay: 0.02,
     duration: 0.5,
    });


  return (
    <div>
      <h1 id={ids} className={classes}>
        {titleText}
      </h1>
    </div>
  );
};

export default Titles;
