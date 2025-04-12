import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(".roate", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 1,
      scrollTrigger: {  // Fixed capitalization of scrollTrigger
        trigger: ".roate",
        start: "top center", 
        end: "bottom -230%", // Fixed typo in "bottom"
        scrub: 2,
        // markers: true,
        toggleActions: "play none none reverse"
      }
    })
    gsap.from("#react", {
      rotate:-360,
      scrollTrigger:{
        trigger:".useLanuage",
        start:"top center",
        end:"bottom -30%",
        markers:true,
        scrub:1,
      }
    })
    gsap.from("#tailwind", {
      x:-100,
      opacity:0,
      scrollTrigger:{
        trigger:".useLanuage",
        start:"top center",
        end:"bottom 40%",
        markers:true,
        scrub:1,
      }
    })
  })

  return (
    <div id='section2' className=' bg-white text-black flex flex-col items-center justify-center mt-20 relative  gap-[20vh]'>
      <div className='roate'>
        <h1 className='text-[30vw]  font-[font] tracking-wide leading-[20vw] '>IMPACTFULL</h1>
      </div>
      <div className='roate'>
        <h1 className='text-[30vw] font-[font] tracking-wide  leading-[20vw]'>DESING</h1>
      </div>
      <div className='roate'>
        <h1 className='text-[30vw] font-[font] tracking-wide  leading-[20vw]'>IS THE</h1>
      </div>
      <div className='roate'>
        <h1 className='text-[30vw] font-[font] tracking-wide  leading-[20vw]'>DESIGN</h1>
      </div >
      <div className='roate'>
        <h1 className='text-[30vw] font-[font] tracking-wide  leading-[20vw]'>THAT</h1>
      </div >
      <div className='roate'>
        <h1 className='text-[30vw] font-[font] tracking-wide  leading-[20vw]'>WORKS</h1>
      </div>
      <div className="useLanuage flex items-center justify-center gap-[15vw] mt-10 text-[5vw]">
      <i id='react' class="ri-reactjs-fill"></i>
      <i id='tailwind' class="ri-tailwind-css-fill"></i>
      <h6 id='gsap' className='text-black '>GSAP</h6>
      </div>
    </div>
  )
}

export default page2