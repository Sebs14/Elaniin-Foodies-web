import React from "react";
import { useState, useEffect } from "react";
import Titles from "../common/titles/Titles";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import AddresBox from "../common/addresBox/AddresBox";
import MapImg from "../../assets/map.png";
import Address from "../../Services/Addresses";
import NoAddress from "./state/NoAddress";
import getText from "../../Services/getText";

const Addresses = () => {
  const [color, setColor] = useState("black");
  const [colorText, setColorText] = useState("white");
  const [colorn, setColorn] = useState("white");
  const [colorTextn, setColorTextn] = useState("black");
  const [address, setAddress] = useState(1);
  const [type, setType] = useState("takeout");
  const [input, setInput] = useState("");
  const [texts, setTexts] = useState(null);

  const fetchText = async () => {
    const text = await getText("address");
    setTexts(text);
  };

  const changeColor = () => {
    if (color === "white") {
      setColor("black");
      setColorText("white");
      setColorn("white");
      setColorTextn("black");
      setType("takeout");
      return;
    }
    setColor("white");
    setColorText("black");
    setColorn("black");
    setColorTextn("white");
    setType("delivery");
  };

  const fetchAddresses = async () => {
    Address(type, input);
    const addresses = await Address(type, input);
    setAddress(addresses);
  };

  useEffect(() => {
    fetchText();
    fetchAddresses();
  }, [type]);

  return (
    <div id="address" className=" lg:flex pt-10 ">
      <div className="lg:w-3/4">
        <Titles
          ids="targetD"
          titleText={texts?.attributes.title}
          classes=" text text--zipping font-drukTextWide font-bold md:text-5xl text-3xl md:w-full pl-4 w-3/4 pt-6"
        />
        <div className="flex pt-10">
          <button
            className="flex justify-center items-center w-1/2 text-black border border-gray-300 py-4 "
            onClick={changeColor}
            style={{ background: `${color}`, color: `${colorText}` }}
          >
            <IoFastFoodOutline size={"30px"} />
            <h3 className=" text-center font-syne font-bold text-lg pl-2">
              {" "}
              {texts?.attributes.buttonTakeout}
            </h3>
          </button>
          <button
            className="flex justify-center items-center w-1/2 text-black border border-gray-300 py-4 "
            onClick={changeColor}
            style={{ background: `${colorn}`, color: `${colorTextn}` }}
          >
            <TbTruckDelivery size={"30px"} />
            <h3 className=" text-center font-syne font-bold text-lg pl-2">
              {" "}
              {texts?.attributes.buttonDelivery}
            </h3>
          </button>
        </div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search restaurant
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch size={"16px"} />
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  fetchAddresses();
                }
              }}
              type="search"
              id="default-search"
              className="default-search block w-full p-4 pl-10 text-sm font-noto text-black border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Buscar nombre o dirección..."
              required
            />
          </div>
        </form>
        <div className="grid overflow-y-auto h-[405px]">
          {address.length > 0 ? (
            address.map((address) => (
              <AddresBox
                key={address.id}
                place={address.title}
                time={address.description}
              />
            ))
          ) : (
            <NoAddress />
          )}
        </div>
      </div>
      <img
        className="w-full md:block hidden  pt-2"
        alt="El Salvador map"
        src={
          import.meta.env.VITE_STRAPI_URL +
          texts?.attributes.map.data.attributes.url
        }
      />
    </div>
  );
};

export default Addresses;
