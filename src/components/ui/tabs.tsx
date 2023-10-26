'use client'
import { Tab } from '@headlessui/react'
import SocialLogin from '../social-login'
import Input from './input'
import { AiOutlineMail } from 'react-icons/ai'
import Divider from './divider'
import Button from './button'
import { useAppContext } from '@/context/AppContext'
import { useEffect, useState } from 'react'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface TabProps {
    tabHeaders: string[],
    className?: string,
    defaultIndex?: number,
    tabOneBtnfn?: () => void,
    tabTwoBtnfn?: () => void
}



export function TabComponent({ tabHeaders, className, defaultIndex, tabOneBtnfn, tabTwoBtnfn }: TabProps) {
    const { setSelectedState } = useAppContext()
    const [email, setEmail] = useState('')
    const [auditorEmail, setAuditorEmail] = useState('')


    return (
        <div className='bg-[#F1F1F1] h-[fit-content] rounded-2xl md:w-[500px] w-[100vw]'>
            <Tab.Group
                onChange={(index) => {
                    if (index === 0) {
                        setSelectedState('client')
                        console.log('client')
                    }
                    if (index === 1) {
                        setSelectedState('auditor')
                        console.log('auditor')
                    }
                    console.log('Changed selected tab to:', index)
                }}
            >
                <Tab.List
                    className='h-[60px] flex items-end justify-end'
                >
                    {tabHeaders && tabHeaders?.map((tabHeader, index) => (
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
                        <SocialLogin />
                        <Divider />
                        <Input
                            imgSrc='/mail.png'
                            placeholder='Email Address'
                            title='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='w-[100%] flex justify-center items-center'>
                            <Button
                                onClick={tabOneBtnfn}
                                className='w-[40%]'
                                disabled={email === ''}
                            >Submit</Button>
                        </div>

                    </Tab.Panel>
                    <Tab.Panel className='w-[100%] h-[100%] flex flex-col'>
                        <SocialLogin />
                        <Divider />
                        <Input
                            imgSrc='/mail.png'
                            placeholder='Email Address'
                            title='Email'
                            value={auditorEmail}
                            onChange={(e) => setAuditorEmail(e.target.value)}
                        />
                        <div className='w-[100%] flex justify-center items-center'>
                            <Button
                                disabled={email === ''}
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
