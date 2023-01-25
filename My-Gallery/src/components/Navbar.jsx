import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-width-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-gray-900'>HOME</li>
        <li className='p-4 hover:bg-gray-900'>COMPANY</li>
        <li className='p-4 hover:bg-gray-900'>RESOURCES</li>
        <li className='p-4 hover:bg-gray-900'>ABOUT</li>
        <li className='p-4 hover:bg-gray-900'>CONTACT</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000' : 'hidden left-[-100]s'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-900'>HOME</li>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-900'>COMPANY</li>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-900'>RESOURCES</li>
          <li className='p-4 border-b border-gray-600 hover:bg-gray-900'>ABOUT</li>
          <li className='p-4 hover:bg-gray-900'>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar