import React, { useRef, useEffect } from "react";
import SplitType from "split-type";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Titles = ({ titleText, classes, ids }) => {
  //  const text = new SplitType("#target");
  //  const textB = new SplitType("#targetB");
  //  const textC = new SplitType("#targetC");
  //  const textD = new SplitType("#targetD");
  //  const characters = document.querySelectorAll(".char");



  // useEffect(() => {
  //   // gsap.fromTo(".char", {y:50}, { y: 0,
  //   //      stagger: 0.05,
  //   //      delay: 0.02,
  //   //      duration: 0.5, ScrollTrigger:{
  //   //       trigger: ".char"
  //   //      }}) 

    
  //  for (let i = 0; i < characters.length; i++) {
  //   characters[i].classList.add("translate-y-full");
  // }

  // gsap.to(".char", {
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.02,
  //   duration: 0.5, ScrollTrigger:".char"
  //  });
  // }, []) 


  useEffect(() =>{
    ScrollOut({
      targets: '.word'
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
