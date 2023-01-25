import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-col-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl text-center font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black hover:bg-green-300'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
          <p className='text-4xl text-center font-bold'>$199</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted Users Allowed</p>
            <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-[#00df9a] hover:bg-gray-800'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
          <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
          <p className='text-4xl text-center font-bold'>$299</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
            <p className='py-2 border-b mx-8'>10 Granted Users Allowed</p>
            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black hover:bg-green-300'>Start Trial</button>
        </div>

      </div>
    </div>
  )
}

export default Cards