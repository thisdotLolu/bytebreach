'use client'
import React, { useEffect, useState } from 'react'
import Button from './ui/button';
import IconButton from './ui/icon-button';
import { Web3Auth } from "@web3auth/modal";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import Loading from './ui/loading';



const SocialLogin = () => {
    const router = useRouter()
    const web3auth = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
        web3AuthNetwork: "sapphire_devnet",
        chainConfig: {
          chainNamespace: "eip155",
          chainId: "0x1",
          rpcTarget: "https://rpc.ankr.com/eth",
          displayName: "Ethereum Mainnet",
          blockExplorer: "https://goerli.etherscan.io",
          ticker: "ETH",
          tickerName: "Ethereum",
        },
      });

    useEffect(()=>{
        const w3authInit=async()=>{
            await web3auth.initModal()

        }
        
        w3authInit()
    },[])

    const loginInfo =[
        {
            name:'Google',
            img:'/icons8-google 1.png',
            text:'Login using your Google Account',
        },
        {
            name:'Github',
            img:'/github.png',
            text:'Login using your Github Account',
           
        },
        {
            name:'Wallet',
            img:'/wallet.png',
            text:'Login using your Wallet'
        }
    ]

    const {selectedState} = useAppContext() 
    const [loading,setLoading] = useState(false)



  return (
    <div className='w-[100%] h-[100%]'>
        {loading && <Loading/>}
        {
            loginInfo?.map((info,index)=>(
                <IconButton
                key={index}
                className='my-[15px] bg-white text-black font-semibold w-[100%]'
                imgSrc={info.img}
                text={info.text}
                onClick={async()=>{
                    await web3auth.connect()
                    .then(async(res)=>{
                        try{
                        const {name}= await web3auth.getUserInfo()
                        const userLogged = localStorage.getItem('user')
                        if(userLogged !== null){
                            router.push('/dashboard')
                            return
                        }
                        if(name){
                            localStorage.setItem('user', name)
                        }
                        
                        console.log(selectedState)
                        if(selectedState==='client'){
                            router.push('/signup/client')
                            return  
                        }
                        else if(selectedState==='auditor'){
                            router.push('/signup/auditor')
                            return
                        }
                        }
                        catch(err){
                            console.log(err)
                        }
                        
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }}
                />
            ))
        }
    </div>
  )
    }

export default SocialLogin;