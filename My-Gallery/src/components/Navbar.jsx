import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-width-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>COMPANY</li>
        <li className='p-4'>RESOURCES</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>CONTACT</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
    </div>
  )
}

export default Navbar