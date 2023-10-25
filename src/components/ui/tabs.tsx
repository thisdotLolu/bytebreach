'use client'
import { Tab } from '@headlessui/react'
import SocialLogin from '../social-login'
import Input from './input'


function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
}

interface TabProps {
    tabHeaders:string[],
    className:string
}

export function TabComponent({tabHeaders}:TabProps) {
  return (
    <div className='bg-[#F1F1F1] h-[500px] rounded-2xl w-[500px]'>
    <Tab.Group>
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
                    ? 'bg-[#F1F1F1] border-b-[#4A3AFF] underline-text'
                    : 'bg-white pt-[10px]'
                )
              }
            >{tabHeader}</Tab>
        ))}
        
      </Tab.List>
      <Tab.Panels className='w-[100%] p-[20px] h-[420px]'>
        <Tab.Panel className='w-[100%] h-[100%]'>
            <SocialLogin/>
            <hr/>
            <Input/>
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
    
  )
}
