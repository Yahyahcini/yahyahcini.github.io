import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function RightSideBar() {
    const yahyatext = useRef(null)
    const welcometext = useRef(null)
    const fulltext = useRef(null)
    const button = useRef(null)
    const buttonone = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const textyahyanow = yahyatext.current
        const textwelcomenow = welcometext.current
        const textfullnow = fulltext.current
        const buttononenow = buttonone.current
        const buttonnow = button.current
        gsap.fromTo(
            buttonnow,
            {
                scale: 0,
                x:80

            }, {
                scale:1,
                duration:0.4,
                x:0
        }
        )
        gsap.fromTo(
            buttononenow,
            {
                scale: 0,
                x:80
            }, {
                scale:1,
                duration:0.5,
                x:0
        }
        )
            gsap.fromTo(textfullnow,{ x: 300, opacity: 0 }, { x: 0, opacity: 1 ,duration:0.7})
         


        gsap.fromTo(
            textyahyanow,
            {
                x: 400,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: textyahyanow,


                }

            }
        )
        gsap.fromTo(
            textwelcomenow,
            {
                x: 700,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: textyahyanow,
                    toggleActions: 'play none play none',


                }

            }
        )
    }, [])
    const textGradientone = {

        backgroundImage: 'linear-gradient(to top, #fda4af, #f43f5e)',

        backgroundClip: 'text',
        color: 'transparent'
    }
    const textGradienttwo = {

        backgroundImage: 'linear-gradient(to left, #e9d5ff 30%,#db2777)',

        backgroundClip: 'text',
        color: 'transparent'
    }
    const textGradientthree = {

        backgroundImage: 'linear-gradient(45deg,#f9a8d4 2%,#c026d3)',

        backgroundClip: 'text',
        color: 'transparent'
    }
    return (
        <div className='text-gray-100 z-20 relative w-full right-10 top-8 '>
            <div className=" bg-[#6360601b] w-full min-h-96 rounded-xl px-6 py-16 border-2 border-gray-700 pb-36 ">
                <div className=" my-6 font-bold text-5xl ml-9 mt-12 font-mono" ref={welcometext} style={textGradientone}>welcome,</div>
                <div className=" my-6 font-bold text-6xl ml-9 font-sans " ref={yahyatext} style={textGradienttwo}>i'm yahya hcini </div>
                <div className=" my-6 font-bold text-3xl ml-9 font-custom" ref={fulltext} style={textGradientthree}>full stack developer &,<br />designer</div>
                <div className="flex">
                    <a ref={button} href="#" download={"yahya's cv"} className="my-6 ml-9 bg-[rgba(0,0,0,0.4)]  hover:animate-pulse shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] px-3 py-2 rounded-2xl">donwload cv</a>
                    <div ref={buttonone} href="#" className="my-6 ml-6 bg-[rgba(0,0,0,0.4)]  hover:animate-pulse shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] px-4 py-2 rounded-2xl"><Link to='/projects'>projects</Link></div>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
