'use client'
import React from 'react'
import Input from './ui/input';
import {AiOutlineMail, AiOutlineProfile} from 'react-icons/ai'
import {FaGithub, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'
import {GoPerson} from 'react-icons/go'
import Button from './ui/button';

const SignUpForm = () => {
  return (
    <div className='w-[100%]'>
        <Input
        title='Full Name'
        placeholder='John Carter'
        imgSrc='/profile.png'
        />      
        <Input
        title='Company Name'
        placeholder='Your Company Name'
        imgSrc='/building.png'
        />      
        <Input
        title='Website'
        placeholder='Your Website'
        imgSrc='/mail.png'
        />
        <div className='flex justify-between items-center'>
        <Input
        containerClassName='w-[220px]'
        title='Twitter'
        placeholder='e.g bytebreach'
        imgSrc='/xcom.png'
        />
        <Input
        containerClassName='w-[220px]'
        title='Github'
        placeholder='e.g bytebreach'
        imgSrc='/gh.png'
        />
        </div>
        <div className='flex w-[100%] justify-center items-center'>
        <Button>
        Submit
        </Button>
        </div>
           
    </div>
  )
}

export default SignUpForm;