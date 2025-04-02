import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='absolute flex justify-end items-center w-full p-5 z-10 left-[-3vw] top-2'>
        <button className='bg-zinc-500 px-4 py-2 rounded-full border-2 hover:bg-neutral-800 '>Hire me</button>
        <i class="ri-menu-3-line text-2xl text-white "></i>
    </div>
  )
}

export default Header