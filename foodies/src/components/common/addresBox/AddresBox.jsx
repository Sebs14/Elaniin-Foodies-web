import React from 'react'

const AddresBox = ({place, time, address }) => {
  return (
    <div className='w-full px-4 py-3 '>
        <button className='w-full bg-white focus:bg-[#FFF1BF] rounded border border-black focus:border-[#FFF1BF]'>
            <h3 className='text-left font-syne font-bold text-lg pl-3 pt-4'>Sucursal {place}</h3>
            <p className='font-noto text-sm pl-3 pt-2 text-left'>Abierto de {time}. </p>
            <p className='font-noto text-sm pl-3 pb-5 text-left'>{address}</p>
        </button>
    </div>
  )
}

export default AddresBox