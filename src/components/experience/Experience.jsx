import React, { useState, useEffect } from "react";
import Titles from "../common/titles/Titles";
import Paragraph from "../common/paragraph/Paragraph";
import Buttons from "../common/buttons/Buttons";
import postMyExperience from "../../Services/Experiences";
import Thanks from "./state/Thanks";
import getText from "../../Services/getText";

const Experience = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const [showInvalidName, setShowInvalidName] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const [showInvalidText, setShowInvalidText] = useState(false);

  const [texts, setTexts] = useState(null);

  const fetchText = async () => {
    const text = await getText('experience');
    setTexts(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postMyExperience(name, email, message);
    if (response.status === 201) {
      setIsValid(true);
      return;
    }
    setIsError(false);
    setIsValid(false);
  };

  useEffect(() => {
    fetchText();
  }, [])

  return (
    <div id="contact" className="bg-black h-screen md:h-[80vh] justify-center ">
      {isValid ? (
        <Thanks />
      ) : (
        <div>
          <Titles
            classes="text text--zipping font-drukTextWide text-center text-white text-4xl pt-20"
            titleText={texts?.attributes.title}
          />
          <Paragraph
            classes="font-noto text-center text-white text-lg pt-5 px-4"
            pText={texts?.attributes.subtitle}
          />
          <form
            onSubmit={handleSubmit}
            className=" flex lg:flex-row flex-col lg:space-y-0 lg:space-x-5 space-y-2 justify-center lg:px-0 md:px-16 px-4 pt-10"
          >
            <div className="flex flex-col lg:w-1/4">
              <label className="font-noto text-sm text-white">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="John Doe"
                onChange={(e) => {
                  setName(e.target.value);
                  setShowInvalidName(false);
                }}
                onInvalid={(e) => {
                  e.preventDefault();
                  setShowInvalidName(true);
                }}
                required
                className="bg-black peer font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 "
              />
              {showInvalidName ? (
                <p className="text-red-700 font-noto">Ingresa un nombre</p>
              ) : (
                ""
              )}
              <label className="font-noto text-sm text-white">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@elaniin.com"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setShowInvalidEmail(false);
                }}
                onInvalid={(e) => {
                  e.preventDefault();
                  setShowInvalidEmail(true);
                }}
                className="bg-black font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 "
              />
              {showInvalidEmail ? (
                <p className="text-red-700 font-noto">
                  Ingresa un correo electronico valido
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col lg:w-1/4 ">
              <label className="font-noto text-sm text-white">Mensaje</label>
              <textarea
                type="text"
                id="message"
                value={message}
                rows="4"
                required
                placeholder="El día de ahora mi experiencia fue..."
                onChange={(e) => {
                  setMessage(e.target.value);
                  setShowInvalidText(false);
                }}
                onInvalid={(e) => {
                  e.preventDefault();
                  setShowInvalidText(true);
                }}
                className="bg-black  font-noto outline-none text-white py-3 rounded px-5 border-white focus:border-yellow-300 focus:text-yellow-300 "
              />
              {showInvalidText ? (
                <p className="text-red-700 font-noto">Deja tus comentarios</p>
              ) : (
                ""
              )}
              <div className="flex lg:justify-end justify-center pt-3">
                <Buttons
                  type="submit"
                  classes="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-yellow-300 group"
                  text={texts?.attributes.button}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Experience;
