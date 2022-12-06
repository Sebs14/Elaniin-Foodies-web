import React from 'react'

const WhoIsF = () => {
  return (
    <div className=' lg:flex justify-center '>
        <div className='bg-whois bg-no-repeat bg-cover lg:h-[565px] lg:w-[60%] h-[565px] w-full lg:text-5xl text-4xl'> 
            <div className='lg:pt-[404px] lg:pr-[40px] md:pt-[445px] md:pr-[53px] pt-[430px] px-4 flex flex-col'>
                <h1 className=' font-drukTextWide  text-white text-right  '>LA COMIDA ES</h1>
                <h1 className=' font-drukTextWide text-[#FFD600] text-right '>NUESTRO ARTE</h1>
            </div>
        </div>
        <div className=' flex flex-col  lg:w-[40%] md:h-[565px] w-full bg-flow bg-no-repeat bg-center bg-cover'>
            <h2 className='font-syne font-bold text-2xl lg:pl-10 md:px-12 lg:pt-40 pt-16 pl-4'> ¿Quién es Foodies? </h2>
            <p className=' font-noto text-black/50 lg:px-10 md:px-12 text-justify text-lg pt-7 px-4'>Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco.</p>

            <a href="/" className=" max-w-fit">
          <div className="flex items-center lg:pl-10 md:px-12 lg:pt-14 md:pt-14 pt-7">
            <h3 className=" font-syne font-bold  text-[22px]">Contáctanos</h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
        </div>
        
    </div>
  )
}

export default WhoIsF