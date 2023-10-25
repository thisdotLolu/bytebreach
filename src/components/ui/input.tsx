import clsx from 'clsx'
import React from 'react'

interface InputProps {
    placeholder:string,
    icon:any,
    imgSrc:string,
    type:string,
    onChange: ()=>void,
    value: string,
    title:string
}

const Input = ({placeholder,icon,imgSrc,type,onChange,value,title,inputClassName, labelClassName}:InputProps) => {
  return (
    <div className='bg-white rounded-[45px] flex justify-between p-[14px] shadow mt-[10px] w-[100%]'>
        <label className='w-[100%] flex'>
            <p>{title}</p>
            <input
            className={clsx('outline-none flex-1')}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            />
        <img
        className='w-[10%]'
        src={imgSrc}
        alt='img'
        />
        </label>
    </div>
  )
}

export default Input