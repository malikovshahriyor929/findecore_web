import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#030617]'>
      <div className='max-w-[1440px] w-[90%] relative mx-auto py-10 flex items-center justify-between max-[670px]:flex-col gap-5 '>
        <div className='flex flex-col gap-6 max-[670px]:items-center'>
          <h1 className='text-white text-2xl font-bold max-[670px]:text-center'>Findecore</h1>
          <p className=' text-white max-[670px]:text-center'>
            &copy; { new Date().getFullYear() } Your Company. All rights reserved.
          </p>
        </div>
        <div className=''>
          <div className='flex gap-3 justify-end max-[670px]:justify-center '>
            <Image width={ 30 } height={ 30 } src="/twitter-svgrepo-com.svg" alt="" />
            <Image width={ 35 } height={ 35 } src="/facebook-svgrepo-com.svg" alt="" />
            <Image width={ 30 } height={ 30 } src="/youtube-168-svgrepo-com.svg" alt="" />
          </div>
          <div className='*:text-white *:text-sm flex gap-4 mt-4 '>
            <p >Privacy Policy</p>
            <p> Terms of use</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer