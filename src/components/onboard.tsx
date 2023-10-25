'use client'
import React from 'react'
import Button from './ui/button';
import { useRouter } from 'next/navigation';

const Onboard = () => {
    const router = useRouter()
  return (
    <div className='rounded-[25px] bg-white flex flex-col h-[400px] w-[400px] justify-center items-center shadow-2xl  shadow-slate-4
    00'>
        <Button
        onClick={()=>router.push('/login')}
        >
            Client
        </Button>
        <Button
        onClick={()=>router.push('/login')}
        >
            Auditors
        </Button>
    </div>
  )
}

export default Onboard;