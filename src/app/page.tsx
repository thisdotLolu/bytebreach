import Onboard from '@/components/onboard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="background h-[100vw] w-[100%]">
      <div className='mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-7 3xl:px-8 4xl:px-16 h-[100vh] flex justify-center items-center'>
          <Onboard/>
      </div>
    </main>
  )
}
