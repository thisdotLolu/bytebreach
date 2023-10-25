import React from 'react'
import LogoName from './logoname';
import Divider from './ui/divider';
import Input from './ui/input';
import { AiOutlineProfile } from 'react-icons/ai';
import { GoInfo, GoPerson } from 'react-icons/go';
import { FaSquareXTwitter, FaTwitter } from 'react-icons/fa6';
import Button from './ui/button';

const AuditorForm = () => {
  return (
    <div className='w-[100%]'>
      <Input
      title='Full Name'
      placeholder='John Carter'
      required={true}
      imgSrc='/profile.png'
      type='text'

      />
      <Input
      title='Twitter'
      placeholder='e.g bytebreach'
      imgSrc='/xcom.png'
      
      />
      <Input
      title='CodeArena'
      placeholder='e.g bytebreach'
      imgSrc='/info.png'
      info='We will import your details from Code Arena'
      />
      <Input
      title='Sherlock'
      placeholder='e.g bytebreach'
      />
        <div className='flex w-[100%] justify-center items-center'>
        <Button>
        Submit
        </Button>
        </div>
    </div>
  )
}

export default AuditorForm;