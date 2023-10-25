import React from 'react'
import LogoName from './logoname';
import Divider from './ui/divider';
import SignUpForm from './signup-form';

const SignUpComponent = () => {
  return (
    <div className='h-[100%]'>
        <LogoName/>
        <div className='bg-white rounded-[25px] h-[fit-content] w-[500px] shadow p-[20px]'>
            <h3
            className='font-bold text-[1.3rem]'
            >Contact details</h3>
            <p
            className='text-[#6F6C90]' 
            >Enter your details to login</p>
            <Divider/>
            <SignUpForm/>
        </div>
    </div>
  )
}

export default SignUpComponent;