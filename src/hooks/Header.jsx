import React from 'react'
import { TiHome } from 'react-icons/ti'
import { IoMdContacts } from 'react-icons/io'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { GrProjects } from 'react-icons/gr'
import skills from './Skills'
import scaling from '../App'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Header() {
  const header = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const div = header.current;

    gsap.fromTo(
      div,
      {
        opacity: 0,
        y: 50,

      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: div,
        }
      }
    );
    gsap.to(
      div,
    
      {
        backgroundColor:'rgba(0,0,0,0.5)',
        duration:2,
        delay:1,
        scrollTrigger: {
          start:'5% 10%',
          end:'30% 0',
          trigger: document.body,
          scrub:1,
          toggleActions:'play none reverse none',
        }
      }
    );
  }, []);


  return (
    <div className='flex justify-center pt-8 sticky top-0 left-72 z-50' id=''>
      <header ref={header} className='z-10  bg-[#63606031] backdrop-blur-xl   rounded-lg  flex justify-evenly  items-center w-fit'>
        {/* logo */}
        <a
          href='#'
          className='mr-32 pl-8 font-bold text-2xl  capitalize text-white'>
          <span className='text-pink-300'>YH</span>'s portfol
          <span className='text-pink-300 lowercase'>io</span>
        </a>

        <nav className='p-2  rounded-md h-12    relative'>
          <div className='mr-8  text-gray-100 font-semibold hover:text-pink-300 transition-all duration-300  inline-block  '>
            <TiHome className='inline-block mr-1  pt-1 font-bold text-lg  ' />{' '}
            <span className=' inline-block relative top-1'>
              <Link to='/'>home</Link>
            </span>{' '}
          </div>
          <a
            href='#coltalk'
            className='mr-8  text-gray-100 font-semibold hover:text-pink-300 transition-all duration-300  inline-block  '>
            <IoMdContacts className='inline-block mr-1  pt-1 font-bold text-lg ' />{' '}
            <span className=' inline-block relative top-1'>contact</span>{' '}
          </a>
          <div className='mr-8  text-gray-100 font-semibold hover:text-pink-300 transition-all duration-300  inline-block  '>
            <GrProjects className='inline-block mr-1  pt-1 font-bold text-lg ' />{' '}
            <span className=' inline-block relative top-1'>
              <Link to='/projects'>projects</Link>
            </span>{' '}
          </div>
          <a
            href='#skills'
            className='mr-32  text-gray-100 font-semibold hover:text-pink-300 transition-all duration-300  inline-block  '>
            <HiQuestionMarkCircle className='inline-block mr-1  pt-1 font-bold text-lg ' />{' '}
            <span className=' inline-block relative top-1'>about</span>{' '}
          </a>
        </nav>
        <a
          href='#coltalk'
          id='talk'
          onClick={scaling}
          className='bg-gradient-to-r from-rose-300 to-red-400 hover:from-pink-500 hover:to-rose-500 text-black rounded-xl shadow-[0_0_2px_rgba(255,255,255,1),inset_0_0_5px_rgba(255,255,255,1)] p-1 font-semibold px-3  mr-10 '>
          Let's talk
        </a>
      </header>
    </div>
  )
}
export default Header
