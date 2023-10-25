'use client'
import React from 'react'
import { TabComponent } from './ui/tabs'
import { states } from '@/lib/constants'
import LogoName from './logoname'
import { useRouter } from 'next/navigation'


const userStates = [
    states.CLIENT_STATE,
    states.AUDITOR_STATE
]

const LoginComponent = () => {
    const router = useRouter()
    const clientSignUp=()=>{
        router.push('/signup/client')
    }
    const auditorSignUp=()=>{
        router.push('/signup/auditor')
    }
  return (
    <div className=''>
        <LogoName/>
        <TabComponent
        tabOneBtnfn={clientSignUp}
        tabTwoBtnfn={auditorSignUp}
        tabHeaders={userStates}
        />
    </div>
  )
}

export default LoginComponent;


