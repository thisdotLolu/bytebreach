import React from 'react'
import { TabComponent } from './ui/tabs'
import { states } from '@/lib/constants'


const userStates = [
    states.CLIENT_STATE,
    states.AUDITOR_STATE
]

const LoginComponent = () => {
    
  return (
    <div className=''>
        <TabComponent
        tabHeaders={userStates}
        
        />
    </div>
  )
}

export default LoginComponent;


const ClientLogin = () =>{
    return (
        <div className=''>

        </div>
    )
}