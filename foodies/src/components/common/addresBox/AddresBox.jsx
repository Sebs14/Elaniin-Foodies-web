import React from 'react'

const AddresBox = ({place, time, address, type }) => {
  return (
    <div className='w-full md:px-14 px-4 py-3 '>
        <div className='w-full bg-white hover:bg-[#FFF1BF] rounded border border-black hover:border-[#FFF1BF]'>
            <h3 className='text-left font-syne font-bold text-lg pl-3 pt-4'>{place}</h3>
            <p className='font-noto text-sm pl-3 pt-2 text-left'>{time}</p>
            <p className='font-noto text-sm pl-3 pb-5 text-left'>{address}</p>
              
        </div>
    </div>
  )
}

export default AddresBox