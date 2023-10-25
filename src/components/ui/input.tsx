import clsx from 'clsx'
import React, { RefObject, useRef, useState } from 'react'

interface InputProps {
    placeholder?:string,
    icon?:any,
    imgSrc?:string,
    type?:string,
    onChange?: ()=>void,
    value?: string,
    title?:string,
    inputClassName?:string,
    labelClassName?:string,
    containerClassName?:string,
    required?:boolean,
    info?:string
}

const Input = ({placeholder,icon,imgSrc,type,onChange,value,title,inputClassName, labelClassName,containerClassName, required, info}:InputProps) => {
    const inputRef:RefObject<HTMLInputElement> | null = useRef(null);
    const [showInfo,setShowInfo] =  useState(false)

    const handleInputFocus=()=>{
        if(inputRef?.current){
          inputRef.current.style.borderColor = '#4A3AFF';
        inputRef.current.style.borderWidth = '2px';
        }
      }
    
        // if(error){
        //   if(inputRef){
        //     inputRef.current.style.borderColor = '#E27D7D';
        //   }
        // }
      
    
      const handleInputBlur=()=>{
        if(inputRef?.current){
            inputRef.current.style.borderColor='';
            inputRef.current.style.borderWidth = '0px';
        }
      }
    
  return (
    <div
    className={clsx('my-[20px] h-[100px]', containerClassName)} 
    onBlur={handleInputBlur}
    >
        <label className='flex flex-col items-start'>
        <p
        className={clsx('font-bold',labelClassName)}
        >{title}
        {required? <span className='text-red-500'>
        *
        </span>:''}
        </p>
        <div className='w-[100%] bg-white rounded-[45px] flex transition-all justify-between p-[14px] shadow h-[100%]'
        ref={inputRef}
        >
            <input
             onFocus={handleInputFocus}
            className={clsx('outline-none flex-1')}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            />
        <div className='w-[20px] relative cursor-pointer'>
        {
            imgSrc ? <img
            onMouseLeave={()=>setShowInfo(false)}
            onMouseEnter={()=>setShowInfo(true)}
            className='w-[100%] object-contain h-[20px]'
            src={imgSrc}
            alt='img'
            />: 
            <div
            onMouseLeave={()=>setShowInfo(false)}
            onMouseEnter={()=>setShowInfo(true)}
            >
                {icon}
            </div>
        }
        {(info && showInfo) && <div className='shadow-lg bg-white p-[10px] w-[300px] h-[fit-content] text-center rounded-2xl absolute left-[-100px] text-sm text-[#A0A3BD]'>
            {info}
        </div>}
        </div>
        
        </div>
        </label>
        
    </div>
  )
}

export default Input