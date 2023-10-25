import clsx from 'clsx'
import React from 'react'


const Button = ({children,className,onClick}:{children:string,className?:string, onClick?:()=>void}) => {
  return (
    <button 
    onClick={onClick}
    className={clsx('m-[10px] bg-[#4A3AFF] flex justify-center items-center text-white text-[1.1rem] p-[10px] px-[50px] rounded-[25px] shadow',className)}>
        {children}
    </button>
  )
}

export default Button