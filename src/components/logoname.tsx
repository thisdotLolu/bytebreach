import React from 'react'

const LogoName = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div
        className='bg-black rounded-full w-[80px] h-[80px] flex justify-center items-center'
        >
        <img
        src='/logobytebreach.png'
        alt='logo'
        className='w-[30px] h-[30px] object-contain'
        />
        </div>
        <p
        className='text-white my-[20px]'
        >ByteBreach</p>
    </div>
  )
}

export default LogoName;