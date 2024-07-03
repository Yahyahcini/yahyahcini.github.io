import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
function Footer() {



    const gradientStyle = {
        position: 'absolute',
        top: '150px',
        left: '0%',
        transform: ' translate(-50%, 0%)',
        width: '700px',
        height: '700px',
        borderRadius: '50% 22% 40% 80%',
        filter: 'blur(100px)',
        background: 'radial-gradient(circle at 50% 50%,rgba(76, 0, 255, 1), rgba(76, 0, 255, 0))',
        opacity: '.3'
    }
    return (
        <div className='relative w-full min-h-72 text-white  overflow-hidden bg-[rgba(0,0,0,0.3)] mt-16   px-24 flex items-center'>
            <div className="radial-gradient z-0  " style={gradientStyle}></div>
            <div className="container flex justify-between">
                <div className="nameandcopyright flex justify-center items-center">
                    <div className="copy flex justify-center items-center mr-1 font-bold text-2xl text-rose-500"><FaRegCopyright className='' />2024</div><div className=" italic font-bold text-3xl">yahya hcini</div>
                </div>
                <div className="logoandlanguague mt-5">
                    <div className="logo font-head text-rose-600   font-bold text-5xl">YH</div>
                    <div className="language flex justify-between">
                        <button className=" text-lg font-semibold mt-2 hover:text-rose-500 transition-all duration-200 cursor-pointer">En</button>
                        <button className=" text-lg font-semibold mt-2 hover:text-rose-500 transition-all duration-200 cursor-pointer">Fr</button>
                    </div>
                </div>
                <div className="flex my-5 justify-center items-center">
                    <a href="https://www.facebook.com/lehcini.yahya.7" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaSquareFacebook /></a>
                    <a href="https://www.instagram.com/yahya_hcini/" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaInstagram /></a>
                    <a href="https://api.whatsapp.com/send?phone=94619928" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaWhatsapp /></a>
                    <a href="https://www.linkedin.com/in/yahya-hcini-6429352b7/" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><FaLinkedinIn /></a>
                    <a href="mailto:your.hciniyahya89@gmail.com" className='mx-4 my-2 font-bold text-2xl hover:text-pink-500 transition-all duration-300  '><MdOutlineMail /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer
