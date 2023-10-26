import React from 'react'
import ReactLoading from 'react-loading';
import LogoName from '../logoname';

const Loading = () => {
  return (
    <div className='fixed z-[100000000] top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.8)] justify-center items-center flex flex-col'>
    <LogoName/>
    <ReactLoading type='spin' color='white' height={50} width={50} />
</div>
  )
}

export default Loading