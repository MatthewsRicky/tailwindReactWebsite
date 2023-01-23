import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
          <Typed className='md:text-5xl sm:4xl text-xl font-bold text-[#00df9a] md:pl-4 pl-2' strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backspeed={140} loop />

        </div>
        <p className='md:text-2xl sm:1xl text-xl font-bold pt-8 px-4 text-gray-500'>
          Moniter your data analytics to increase revenue for BTB, BTC & SAAS platforms
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-lime-100'>Get Started</button>
      </div>

    </div>
  )
}

export default Hero