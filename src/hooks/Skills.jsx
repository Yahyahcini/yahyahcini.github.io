import React, { useEffect, useRef } from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { SiCyberdefenders } from "react-icons/si";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { SiMaterialdesign } from "react-icons/si";
import { DiHtml53DEffects } from "react-icons/di";
import { IoMdAppstore } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { TbMessageLanguage } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbHexagonNumber1 } from "react-icons/tb";
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber3 } from "react-icons/tb";
import { TbHexagonNumber4 } from "react-icons/tb";
import { AiFillExperiment } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import { GrVulnerability } from "react-icons/gr";
import { MdOutlineInterests } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import image from './us.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Skills() {
    const container = useRef(null)
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     const div = container.current;
    
    //     gsap.fromTo(
    //       div,
    //       {
    //         opacity: 0,
    //         y: 80,
    
    //       },
    //       {
    //         opacity: 1,
    //         y: -90,
    //         duration:0.5,
            
    //         scrollTrigger: {
    //           trigger: document.body,
    //           start:'35% 50%',
    //           end:'90% 50%',
    //           toggleActions:'play reverse play reverse',
              

    //         }
    //       }
    //     );
    //     gsap.fromTo(
    //       div,
       
    //       {
    //         y: -90,
    //       },
    //       {
    //         y: 10,
    //         delay:0.5,
    
    //         scrollTrigger: {
    //           trigger: document.body,
    //           start:'40% 50%',
    //           end:'90% 50%',

    //           toggleActions:'play reverse play reverse',
    //         }
    //       }
    //     );
        
    //   }, []);
    
    const gradientStyleright = {
        position: 'absolute',
        bottom: '-1200px',
        right: '-400px',
        width: '800px',
        height: '800px',
        filter: 'blur(90px)',
        borderRadius: '50% 22% 40% 80%',
        background: 'radial-gradient(circle at 50% 50%,#db2777, rgba(76, 0, 255, 0))',
        opacity: '.3'
    }
    return (
        <div className='w-full min-h-screen  bg-slate-950 p-10 scroll-m-6'  id='skills'>
            <div className="" style={gradientStyleright}></div>
            <div className="xl:columns-3 lg:columns-2 gap-3 mt-10  w-full z-5 relative" ref={container}>
                <div className="p-2 bg-[#63606028] inline-block w-full  rounded-xl mt-3  border-2 border-gray-700 skills min-h-60 overflow-hidden ">
                    <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">skills <GiSkills className='inline-block ml-2' /> </div>
                    <div className="flex  flex-wrap justify-center items-center">
                        <div className="flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><HiMiniCodeBracket className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">web <br /> developement</div></div>
                        <div className="flex mt-1 text-white justify-center m-3 flex-col px-6  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><SiCyberdefenders className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">cyber <br /> <span>security</span></div></div>
                        <div className="flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><TbDeviceGamepad2 className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">game <br /> developement</div></div>
                        <div className="flex mt-1 text-white justify-center m-3 flex-col px-7 items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><SiMaterialdesign className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">web <br /> design</div></div>
                        <div className="flex mt-1 text-white justify-center m-3 flex-col px-5 items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><DiHtml53DEffects className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">3d <br /> modeling</div></div>
                        <div className="flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><IoMdAppstore className='mx-2 text-pink-500 my-1 font-extrabold text-3xl' /><div className=" mx-2 text-center text-gray-200 font-semibold">app <br /> developement</div></div>
                    </div>
                </div>
                <div className="bg-[#63606028] inline-block w-full  min-h-48 rounded-xl  border-2 border-gray-700 mt-2">
                    <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">languages <TbMessageLanguage className='inline-block ml-2' /> </div>
                    <div className="">
                        <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">
                            <TbHexagonNumber1 className='absolute top-50 left-28 font-bold text-3xl' />
                            <svg className='mx-2 w-4 text-pink-500 my-1 font-extrabold text-3xl' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 300 200">
                                <rect x="0" y="0" width="300" height="67" fill="#000" />
                                <rect x="0" y="67" width="300" height="66" fill="#FFF" />
                                <rect x="0" y="133" width="300" height="67" fill="green" />
                                <polygon points="0,0 150,100 0,200" fill="#C8102E" />
                            </svg>
                            <div className="absolute top-50 right-28 ml-12 w-5 h-6 bg-white rounded-full animate-bounce shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div>
                            <div className=" mx-2 text-center text-gray-200 font-semibold">arabic</div></div>
                        <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">
                            <TbHexagonNumber2 className='absolute top-50 left-28 font-bold text-3xl' />
                            <img className='mx-2 my-2 w-4' src={image} />
                            <div className=" mx-2 text-center text-gray-200 font-semibold">english</div>
                            <div className="absolute top-50  right-28 w-4 h-5 bg-white rounded-full animate-bounce shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div>
                        </div>
                        <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">
                            <TbHexagonNumber3 className='absolute top-50 left-28 font-bold text-3xl' />
                            <svg className='mx-2 w-4 text-pink-500 my-1 font-extrabold text-3xl' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 300 200">
                                <rect x="0" y="0" width="100" height="200" fill="#0055A4" />
                                <rect x="100" y="0" width="100" height="200" fill="#FFFFFF" />
                                <rect x="200" y="0" width="100" height="200" fill="#EF4135" />
                            </svg>
                            <div className="absolute  top-50 right-28 w-3 h-4 bg-white rounded-full animate-bounce shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div><div className=" mx-2 text-center text-gray-200 font-semibold">french</div></div>
                        <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">
                            <TbHexagonNumber4 className='absolute top-50 left-28 font-bold text-3xl' />
                            <svg className='mx-2 w-4 text-pink-500 my-1 font-extrabold text-3xl' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 300 200">
                                <rect x="0" y="0" width="300" height="67" fill="#000" />
                                <rect x="0" y="67" width="300" height="66" fill="#FF0000" />
                                <rect x="0" y="133" width="300" height="67" fill="#FFCC00" />
                            </svg>
                            <div className="absolute top-50  right-28 w-2 h-3 bg-white rounded-full animate-bounce shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div>
                            <div className=" mx-2 text-center text-gray-200 font-semibold">german</div></div>
                    </div>
                </div>
                <div className="bg-[#63606028] inline-block w-full  min-h-12 rounded-xl mt-3  border-2 border-gray-700 personal-skils">
                    <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">personal skills <BsPersonWorkspace className='inline-block ml-2' /> </div>
                    <div className="flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><div className=" mx-2 text-center text-gray-200 font-semibold first-letter:text-pink-500 "><span>creativity   </span>-<span className='first-letter:text-pink-500 inline-block ml-2'>collaborative </span><br /><span className='first-letter:text-pink-500 inline-block'>work in the noise</span></div></div>
                </div>
                <div className="bg-[#63606028] mt-3 inline-block w-full  min-h-16 rounded-xl  border-2 border-gray-700 overflow-hidden">
                <div className="text-gray-200 text-2xl font-bold text-center py-2 pb-2 flex justify-center items-center  ">experience <AiFillExperiment className='inline-block ml-2' /></div>
                <div className="mx-4 -my-2 pb-px "><div className="tag ml-14 relative top-5 font-bold text-white">Html</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><FaHtml5 className='font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-gray-200 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress w-96 h-full lg:w-96 md:w-96 sm:w-50 xs:w-30  shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px "><div className="tag ml-14 relative top-5 font-bold text-white">css</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><FaCss3 className='font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-gray-200 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress w-96 h-full lg:w-96 md:w-96 sm:w-50 xs:w-30  shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px "><div className="tag ml-14 relative top-5 font-bold text-white">javaScript</div><div className="circle w-11 h-12 rounded-full flex justify-center items-center border-2 border-slate-300"><TbBrandJavascript className='font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-slate-700 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress lg:w-80 md:w-80 sm:w-44  xs:w-24  w-80 h-full  bg-white  shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px "><div className="tag ml-14 relative top-5 font-bold text-white">reactJs</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><FaReact className=' font-bold animate-spinSlow text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-slate-700 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress lg:w-72 md:w-72 sm:w-40 xs:w-20  w-60 h-full  bg-white shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px "><div className="tag ml-14 relative top-5 font-bold text-white">tailwindCss</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><SiTailwindcss className=' animate-pulse font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-slate-700 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress lg:w-80 md:w-80 sm:w-44 xs:w-24  bg-white  w-80 h-full shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px mb-1"><div className="tag ml-14 relative top-5 font-bold text-white">strapi</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><SiStrapi className=' animate-pulse font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-slate-700 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress lg:w-80 md:w-80 sm:w-44 xs:w-24  bg-white  w-80 h-full shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="mx-4 -my-2 pb-px mb-1"><div className="tag ml-14 relative top-5 font-bold text-white">mysql</div><div className="circle w-11 h-11 rounded-full flex justify-center items-center border-2 border-slate-300"><SiMysql className=' font-bold text-2xl text-rose-400' /></div><div className="bar w-96 h-1 bg-slate-700 lg:w-96 md:w-96 sm:w-50 xs:w-30  relative left-14 bottom-5 rounded-sm"><div className="progress lg:w-80 md:w-80 sm:w-44 xs:w-24  bg-white  w-80 h-full shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]"></div></div></div>
                <div className="text-gray-400 pt-3 text-center mb-4 font-bold">Currently in learning mode</div>
                </div>
                <div className="bg-[#63606028] inline-block w-full  min-h-12 rounded-xl  border-2 mt-3 border-gray-700 education">
                <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">education <FaBook className='inline-block ml-2' /> </div>
                <div className="flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md"><div className=" mx-2 text-center text-gray-200 font-semibold "><div className="">high school,</div><div className="">sidi bouzid , <span className='inline-block text-rose-400'>9</span> avril <span className='inline-block text-rose-400'>1997</span></div></div></div>
                </div>
                <div className="bg-[#63606028] inline-block w-full  min-h-12 mt-3 rounded-xl  border-2 border-gray-700 what can i do">
                <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">ability <GrVulnerability className='inline-block ml-2' /></div>
                <div className="px-4 py-2 text-white font-semibold font-mono w-full">"As a versatile web developer, I specialize in crafting dynamic websites using React and Tailwind CSS for the frontend, and Strapi for backend management. With expertise in these technologies, I deliver modern, responsive, and visually appealing web solutions tailored to meet diverse client needs."</div>
                </div>
                <div className="bg-[#63606028] inline-block w-full mt-3  min-h-12 rounded-xl  border-2 border-gray-700 hobbys & interest">
                <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">hobbys & interests <MdOutlineInterests className='inline-block ml-2' /> </div>
                    <div className="">
                    <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">Sports & Fitness</div>
                    <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">Hiking & camping</div>
                    <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)]  py-2 rounded-md">listening to music</div>
                    <div className="relative flex mt-1 text-white justify-center m-3 flex-col  items-center bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] mb-6  py-2 rounded-md">coding</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills
