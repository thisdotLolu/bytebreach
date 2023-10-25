'use client'
import { Tab } from '@headlessui/react'
import SocialLogin from '../social-login'
import Input from './input'
import {AiOutlineMail} from 'react-icons/ai'
import Divider from './divider'
import Button from './button'


function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
}

interface TabProps {
    tabHeaders:string[],
    className?:string,
    defaultIndex?:number,
    tabOneBtnfn?:()=>void,
    tabTwoBtnfn?:()=>void
}



export function TabComponent({tabHeaders,className, defaultIndex,tabOneBtnfn,tabTwoBtnfn}:TabProps) {

  return (
    <div className='bg-[#F1F1F1] h-[fit-content] rounded-2xl w-[500px]'>
    <Tab.Group
    
    >
      <Tab.List
      className='h-[60px] flex items-end justify-end'
      >
        {tabHeaders && tabHeaders?.map((tabHeader,index)=>(
            <Tab
            key={index}
            className={({ selected }) =>
                classNames(
                  'outline-none w-full flex-1 rounded-2xl h-[60px] text-black font-[900] text-[1.1rem]',
                  selected
                    ? 'bg-[#F1F1F1] underline-text'
                    : 'bg-white pt-[10px]'
                )
              }
            >{tabHeader}</Tab>
        ))}
        
      </Tab.List>
      <Tab.Panels className='w-[100%] p-[20px] h-[fit-content]'>
        <Tab.Panel className='w-[100%] h-[100%] flex flex-col'>
            <SocialLogin/>
            <Divider/>
            <Input
            imgSrc='/mail.png'
            placeholder='Email Address'
            title='Email'
            />
            <div className='w-[100%] flex justify-center items-center'>
            <Button
            onClick={tabOneBtnfn}
            className='w-[40%]'
            >Submit</Button>
            </div>
            
        </Tab.Panel>
        <Tab.Panel className='w-[100%] h-[100%] flex flex-col'>
        <SocialLogin/>
            <Divider/>
            <Input
           imgSrc='/mail.png'
            placeholder='Email Address'
            title='Email'
            />
            <div className='w-[100%] flex justify-center items-center'>
            <Button
            onClick={tabTwoBtnfn}
            className='w-[40%]'
            >Submit</Button>
            </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
    
  )
}
