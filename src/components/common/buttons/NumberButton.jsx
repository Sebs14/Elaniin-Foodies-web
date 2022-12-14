import React from 'react'

const NumberButton = ({click, page}) => {
  return (
    <div>
        <button onClick={click} className=" rounded-lg font-noto font-bold text-center text-black outline outline-2 outline-black/20 px-4 py-2 hover:bg-black hover:text-yellow-300 ">{page}</button>
    </div>
  )
}

export default NumberButton