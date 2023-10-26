'use client'
import React from 'react'
import Button from './ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Onboard = () => {
    const router = useRouter()
  return (
    <div className='rounded-[25px] bg-white flex flex-col h-[400px] w-[400px] justify-center items-center shadow-2xl  shadow-slate-4
    00'>
        <Button 
        disabled={false}
        onClick={()=>router.push('/login')}>
            Launch app
        </Button>
    </div>
  )
}

export default Onboard;