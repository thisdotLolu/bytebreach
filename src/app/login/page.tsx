import LoginComponent from '@/components/login';
import React from 'react'

const Login = () => {
  return (
    <main className="background w-[100%] p-[20px]">
      <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 flex justify-center items-center'>
          <LoginComponent/>
      </div>
    </main>
  )
}

export default Login;