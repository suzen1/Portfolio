import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
const Hero_text = () => {
  useGSAP(() =>{
    gsap.from(".sam1", {
     transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      delay: 0.7
    })
    gsap.from(".sam2", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    gsap.from(".line1", {
     x: "-100%",
      duration: 1,
      delay: 0.5
    })
    gsap.from(".btext", {
      transform: "rotateX(-80deg)",
       opacity: 0,
       duration: 1,
       delay: 0.5
     })

    gsap.from(".line2", {
      x: "150%",
       duration: 1,
       delay: 0.5
     })
  })
  return (
    <div id='text_main' className=' absolute text-white flex flex-col items-center  w-[60vw] h-[60vh] z-10 left-[5vw] translate-x-[-4%] translate-y-[30%] uppercase justify-center text-center leading-tight overflow-hidden'>
      <h3 className='sam1 text-4xl font-semibold'>Lorem ipsum dolor sit amet.</h3>
      <div className='line1 w-full bg-white p-[1px] mt-5'></div>
      <h1 className='btext text-[15vh] tracking-tighter'>SAYYED SUZEN ALI</h1>
      <div className='line2 w-[53vw] bg-white p-[1px]'></div>
      <h3 className='sam2 text-4xl font-semibold mt-2'>Lorem ipsum dolor sit amet.</h3>
    </div>
  )
}

export default Hero_text