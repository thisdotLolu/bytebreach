'use client'

import SignUpComponent from '@/components/signup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
// import { useSearchParams } from 'react-router-dom';

const SignUp = () => {
    
   
  return (
    <main className="background w-[100%] p-[20px]">
    <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex justify-center items-center'>
        <SignUpComponent/>
    </div>
  </main>
  )
}

export default SignUp;