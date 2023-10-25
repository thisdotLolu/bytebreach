import clsx from 'clsx'
import Image from 'next/image';
import React from 'react'


const IconButton = ({children,className,onClick,icon,imgSrc,text}:{children?:React.ReactNode,className?:string, onClick?:()=>void, imgSrc?:string,icon?:any, text:string}) => {
  return (
    <button
    onClick={onClick}
    className={clsx('flex justify-around items-center text-[1rem] p-[12px] px-[70px] rounded-[45px] shadow',className)}>
        {
        imgSrc?
        (<Image
        width={100}
        height={100}
        className='h-[fit-content] w-[10%] object-contain mr-[20px]'
        src={imgSrc}
        alt='icon'
        />): icon
        }
        <p
        className='w-[90%] text-start'
        >{text}</p>
    </button>
  )
}

export default IconButton;