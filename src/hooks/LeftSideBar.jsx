import React from 'react'
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import profile from './profile.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
function LeftSideBar() {
  const div = useRef(null)
  const aone = useRef(null)
  const atwo = useRef(null)
  const athree = useRef(null)
  const afour = useRef(null)
  const afive = useRef(null)
  const button = useRef(null)
  const buttonone = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const divnow = div.current
    const aonenow = aone.current
    const atwonow = atwo.current
    const athreenow = athree.current
    const afournow = afour.current
    const afivenow = afive.current
    const buttonnow = button.current
    const buttononenow = buttonone.current
    gsap.fromTo(
      buttonnow,
      {
        scale: 0,
        x: 80

      }, {
      scale: 1,
      duration: 0.4,
      delay: 0.3,
      x: 0
    }
    )

    gsap.fromTo(
      buttononenow,
      {
        opacity: 0,
        x: 800

      }, {
      opacity: 1,
      duration: 0.4,
      delay: 0.3,
      x: 0
    }
    )

    const tl = gsap.timeline()
    tl.to(afivenow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(afivenow, { y: -100, duration: 0.1, delay: 0.01 })
      .to(afivenow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(afournow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(afournow, { y: -100, duration: 0.1, delay: 0.01 })
      .to(afournow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(athreenow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(athreenow, { y: -100, duration: 0.1, delay: 0.01 })
      .to(athreenow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(atwonow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(atwonow, { y: -100, duration: 0.1, delay: 0.01 })
      .to(atwonow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(aonenow, { y: 0, duration: 0.1, delay: 0.01 })
      .to(aonenow, { y: -100, duration: 0.1, delay: 0.01 })
      .to(aonenow, { y: 0, duration: 0.1, delay: 0.01 })

    gsap.fromTo(
      divnow,
      {
        scaleX: 0.0,
        scaleY: .4,
      },
      {
        scaleX: 1,
        scaleY: 1,
        duration: 0.6
      }
    )
  })
  return (

    <div id='homy' className='text-gray-100 z-20 relative m-20  bottom-12'>

      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        tiltReverse={false}
        perspective={2000}
        scale={0.95}
        glareEnable={true}
        glareColor="rgba(255, 255, 255, 0.5)"
        glarePosition="all"
        glareBorderRadius="10px"
        glareColor='blue'
        glareMaxOpacity={0.2}
        transitionSpeed={2000}
      >
        <div ref={div} className=" bg-[#63606028] w-96 min-h-96 rounded-xl px-6 py-2  border-2 border-gray-700">
          <div className="flex mb-4 font- capitalize  items-center justify-between">
            <h1 className='my-3  font-bold text-2xl'><span className=' text-pink-400 '>y</span>ahya <span className='text-pink-400 '>h</span>cini</h1>
            <MdFaceRetouchingNatural className=' font-bold text-pink-400 text-4xl mr-2' />
          </div>
          
            <img src={profile} ref={button} className=' w-64 shadow-[0_0_1px_rgba(255,255,255,.5)] h-60 rounded-lg bg-gray-50 mb-6 ml-9 overflow-hidden' alt="browser do not support this" />
          
          <div className="m-2">
            <div className=" font-semibold text-gray-400 text-lg capitalize">specialize in :</div>
            <div className="capitalize font-mono pl-2">crafting user-friendly websites.</div>
          </div>
          <div className="m-2">
            <div className=" font-semibold text-gray-400 text-lg capitalize">based in :</div>
            <div className="capitalize font-mono pl-2">sidi bouzid, tunisie</div>
          </div>

          <div className="flex my-5 justify-center items-center">
            <a ref={aone} href="https://www.facebook.com/lehcini.yahya.7" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaSquareFacebook /></a>
            <a ref={atwo} href="https://www.instagram.com/yahya_hcini/" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaInstagram /></a>
            <a ref={athree} href="https://api.whatsapp.com/send?phone=94619928" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaWhatsapp /></a>
            <a ref={afour} href="https://www.linkedin.com/in/yahya-hcini-6429352b7/" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaLinkedinIn /></a>
            <a ref={afive} href="mailto:your.hciniyahya89@gmail.com" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><MdOutlineMail /></a>
          </div>
          <div className="flex justify-center items-center w-full ">
            <a ref={buttonone} href="#coltalk" className='px-4 text-gray-200 rounded-xl mb-4  p-1 font-semibold bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] '>Let's collaborate</a>

          </div>
        </div>
      </Tilt>
    </div>
  )
}
export default LeftSideBar
