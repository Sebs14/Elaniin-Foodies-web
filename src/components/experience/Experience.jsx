import React, {useState} from "react";
import Titles from "../common/titles/Titles";
import Paragraph from "../common/paragraph/Paragraph";
import Buttons from "../common/buttons/Buttons";
import Experiences from "../../Services/Experiences";

const Experience = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    Experiences(name, email, message)
  }


  return (
    <div className="bg-black h-screen  justify-center ">
      <Titles
        classes="text text--zipping font-drukTextWide text-center text-white text-4xl pt-20"
        titleText="Cuentanos tu experiencia"
      />
      <Paragraph
        classes="font-noto text-center text-white text-lg pt-5 px-4"
        pText="No te pierdas nuestras grandes ofertas y recibe notificaciones de todos nuestros restaurantes top via e-mail."
      />
      <form className=" flex lg:flex-row flex-col lg:space-y-0 lg:space-x-5 space-y-2 justify-center lg:px-0 md:px-16 px-4 pt-10">
        <div className="flex flex-col lg:w-1/4">
          <label className="font-noto text-sm text-white">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            className="bg-black font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 "
          />
          <label className="font-noto text-sm text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="john.doe@elaniin.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black font-noto border border-white text-white py-3 rounded px-5 focus:border-yellow-300 focus:text-yellow-300 "
          />
        </div>
        <div className="flex flex-col lg:w-1/4 ">
          <label className="font-noto text-sm text-white">Mensaje</label>
          <textarea
            type="text"
            id="message"
            value={message}
            rows="4"
            placeholder="El día de ahora mi experiencia fue..."
            onChange={(e) => setMessage(e.target.value)}
            className="bg-black  font-noto outline-none text-white py-3 rounded px-5 border-white focus:border-yellow-300 focus:text-yellow-300 "
          />
          <div className="flex lg:justify-end justify-center pt-3">
            <Buttons click={handleSubmit} text="Enviar comentarios"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experience;
