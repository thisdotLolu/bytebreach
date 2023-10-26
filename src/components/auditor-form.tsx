import React, { useState } from 'react'
import LogoName from './logoname';
import Divider from './ui/divider';
import Input from './ui/input';
import { AiOutlineProfile } from 'react-icons/ai';
import { GoInfo, GoPerson } from 'react-icons/go';
import { FaSquareXTwitter, FaTwitter } from 'react-icons/fa6';
import Button from './ui/button';
import { useRouter } from 'next/navigation';

const AuditorForm = () => {
  const router = useRouter()
  const [auditorData, setAuditorData] = useState({
    fullName: "",
    twitter: "",
    codeArena: "",
    sherlock: ""
  })
  return (
    <div className='w-[100%]'>
      <Input
        title='Full Name'
        placeholder='John Carter'
        required={true}
        imgSrc='/profile.png'
        type='text'
        value={auditorData.fullName}
        onChange={(e) => setAuditorData((prev) => ({ ...prev, fullName: e.target.value }))}
      />
      <Input
        title='Twitter'
        placeholder='e.g bytebreach'
        imgSrc='/xcom.png'
        value={auditorData.twitter}
        onChange={(e) => setAuditorData((prev) => ({ ...prev, twitter: e.target.value }))}
      />
      <Input
        title='CodeArena'
        placeholder='e.g bytebreach'
        imgSrc='/info.png'
        info='We will import your details from Code Arena'
        value={auditorData.codeArena}
        onChange={(e) => setAuditorData((prev) => ({ ...prev, codeArena: e.target.value }))}
      />
      <Input
        title='Sherlock'
        placeholder='e.g bytebreach'
        value={auditorData.sherlock}
        onChange={(e) => setAuditorData((prev) => ({ ...prev, sherlock: e.target.value }))}
      />
      <div className='flex w-[100%] justify-center items-center'>
        <Button
          disabled={auditorData.fullName === ''}
          onClick={() => {
            console.log(auditorData)
            router.push('/dashboard')
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default AuditorForm;