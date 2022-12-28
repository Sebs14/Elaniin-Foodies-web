import React from "react";
import FoodiesFooter from "../../assets/foodies_footer.svg";
import AppStore from "../../assets/appstore.jpg";
import GooglePlay from "../../assets/googleplay.jpg";
import Line from "../../assets/line"
import Paragraph from "../common/paragraph/Paragraph";


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="md:flex md:flex-row w-full items-center md:justify-between flex flex-col justify-center">
          <div className="pb-4">
            <img src={FoodiesFooter} />
          </div>
          <div className="flex space-x-2" >
            <a href="https://www.apple.com/la/app-store/">
              <img src={AppStore} />
            </a>
            <a href="https://play.google.com/store/games?hl=es&pli=1">
              <img src={GooglePlay} />
            </a>
          </div>
        </div>
        <div className="pt-4 w-full">
            <Line/>
        </div>
        <div className="flex md:flex-row flex-col space-y-3 pt-5 text-center font-bold items-center justify-start md:space-y-0 md:space-x-3 lg:space-x-44 text-black/50 ">
            <a href="/#address" className="hover:text-black">
                <Paragraph pText="Conoce nuestras sucursales"/>
            </a>
            <a href="/#whois" className="hover:text-black">
                <Paragraph pText="Acerca de"/>
            </a>
            <a href="/#carousel" className="hover:text-black">
                <Paragraph pText="¿Que hablan de nosotros?"/>
            </a>
            <a href="/#contact" className="hover:text-black">
                <Paragraph pText="Contáctos"/>
            </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
