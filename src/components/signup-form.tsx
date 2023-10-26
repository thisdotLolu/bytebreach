'use client'
import React, { useState } from 'react'
import Input from './ui/input';
import { AiOutlineMail, AiOutlineProfile } from 'react-icons/ai'
import { FaGithub, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'
import { GoPerson } from 'react-icons/go'
import Button from './ui/button';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter()
  const [clientData, setClientData] = useState({
    fullName: "",
    companyName: "",
    website: "",
    twitter: "",
    github: ""
  })

  return (
    <div className='w-[100%]'>
      <Input
        title='Full Name'
        placeholder='John Carter'
        imgSrc='/profile.png'
        required={true}
        value={clientData.fullName}
        onChange={(e) => setClientData((prev) => ({ ...prev, fullName: e.target.value }))}
      />
      <Input
        title='Company Name'
        placeholder='Your Company Name'
        imgSrc='/building.png'
        required={true}
        value={clientData.companyName}
        onChange={(e) => setClientData((prev) => ({ ...prev, companyName: e.target.value }))}
      />
      <Input
        title='Website'
        placeholder='Your Website'
        imgSrc='/mail.png'
        value={clientData.website}
        onChange={(e) => setClientData((prev) => ({ ...prev, website: e.target.value }))}
      />
      <div className='md:flex md:flex-row flex flex-col justify-between items-center'>
        <Input
          containerClassName='md:w-[220px] w-[100%]'
          title='Twitter'
          placeholder='e.g bytebreach'
          imgSrc='/xcom.png'
          value={clientData.twitter}
          onChange={(e) => setClientData((prev) => ({ ...prev, twitter: e.target.value }))}
        />
        <Input
          containerClassName='md:w-[220px] w-[100%]'
          title='Github'
          placeholder='e.g bytebreach'
          imgSrc='/gh.png'
          value={clientData.github}
          onChange={(e) => setClientData((prev) => ({ ...prev, github: e.target.value }))}
        />
      </div>
      <div className='flex w-[100%] justify-center items-center'>
        <Button
          disabled={clientData.fullName === '' && clientData.companyName === ''}
          onClick={() => {
            router.push('/dashboard')
          }}
        >
          Submit
        </Button>
      </div>

    </div>
  )
}

export default SignUpForm;