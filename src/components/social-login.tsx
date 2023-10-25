'use client'
import React from 'react'
import Button from './ui/button';
import IconButton from './ui/icon-button';
const loginInfo =[
    {
        name:'Google',
        img:'/icons8-google 1.png',
        text:'Login using your Google Account'
    },
    {
        name:'Github',
        img:'/github.png',
        text:'Login using your Github Account'
    },
    {
        name:'Wallet',
        img:'/wallet.png',
        text:'Login using your Wallet'
    }
]

const SocialLogin = () => {
  return (
    <div className='w-[100%] h-[100%]'>
        {
            loginInfo?.map((info,index)=>(
                <IconButton
                key={index}
                className='my-[15px] bg-white text-black font-semibold w-[100%]'
                imgSrc={info.img}
                text={info.text}
                />
            ))
        }
    </div>
  )
    }

export default SocialLogin;