import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { useState } from 'react';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';

function Contact() {
    const formRefOne = useRef(null);
    const [errorsone, setErrorsone] = useState({})
    const [formDataOne, setFormDataOne] = useState({
        firstNameOne: '',
        lastNameOne: '',
        emailOne: '',
        phoneNumberOne: '',
        messageone: '',
    })
    const handleInputOne = (e) => {
        const newObj = { ...formDataOne, [e.target.name]: e.target.value }
        setFormDataOne(newObj)

    }
    function handleSubmitOne(e) {
        e.preventDefault()
        const validationErrorsOne = {};
        if (formDataOne.firstNameOne.trim() == '') {
            validationErrorsOne.firstNameOne = "firstName shouldn't be empty"

        } else {
            validationErrorsOne.firstNameOne = ""

        }
        if (formDataOne.lastNameOne.trim() == '') {
            validationErrorsOne.lastNameOne = "lastName shouldn't be empty"

        } else {
            validationErrorsOne.lastNameOne = ""

        }
        if (formDataOne.emailOne.indexOf('@') == -1) {
            validationErrorsOne.emailOne = "email should contain @"

        } else {
            validationErrorsOne.emailOne = ""

        }
        if (formDataOne.phoneNumberOne.length < 8 ) {
            validationErrorsOne.phoneNumberOne = "number should contain more than 8 numbers"

        } else {
            validationErrorsOne.phoneNumberOne = ""

        }
        if (formDataOne.messageone.length < 15) {
            validationErrorsOne.messageone = "message should contain more than 15 characters "

        } else {
            validationErrorsOne.messageone = ""

        }

        setErrorsone(validationErrorsOne)
        if (Object.keys(validationErrorsOne).length == 0) {
            alert("request sent successfully !!")
            formRefOne.current.submit();
        }
    }
    const formRef = useRef(null);
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    })
    const handleInput = (e) => {
        const newObj = { ...formData, [e.target.name]: e.target.value }
        setFormData(newObj)

    }
    function handleSubmit(e) {
        e.preventDefault()
        const validationErrors = {};
        if (formData.firstName.trim() == '') {
            validationErrors.firstName = "firstName shouldn't be empty"
            
        }else{
            validationErrors.firstName = ""

        }
        if (formData.lastName.trim() == '') {
            validationErrors.lastName = "lastName shouldn't be empty"
            
        }else{
            validationErrors.lastName = ""

        }
        if (formData.email.indexOf('@') == -1) {
            validationErrors.email = "email should have @"
            
        }else{
            validationErrors.email = ""

        }
        if (formData.phoneNumber.length < 8 ) {
            validationErrors.phoneNumber = "number should contain more than 8 numbers"
            
        }else{
            validationErrors.phoneNumber = ""

        }
        if (formData.message.length < 15) {
            validationErrors.message = "message should contain more than 15 characters "
            
        }else{
            validationErrors.message = ""

        }
        
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length == 0) {
            alert("request sent successfully !!")
            let form = document.getElementsByTagName("form")[0]
            formRef.current.submit();
        }
    }




    return (
        <div id='coltalk' className='w-full min-h-screen text-white  bg-slate-950 p-10 scroll-m-6 pt-16 '>
            <div className="lg:columns-2 md:columns-1 sm:columns-1 gap-6 z-20 relative">
                <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                tiltReverse={false}
                perspective={2000}
                scale={1}
                transitionSpeed={5000}
                >
                <div className=" bg-[#63606028] w-full min-h-96 rounded-xl  px-6 py-2 inline-block  border-2 border-gray-700">
                    <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6 flex justify-center items-center  ">let's collaborate <FaHandshake className='inline-block ml-2 text-3xl' /> </div>
                     <div className="flex justify-center items-center px-12">
                        <form id='formone' ref={formRefOne} action="" className={`w-full`} onSubmit={handleSubmitOne}>
                            <div className="columns-2 gap-4 mb-6">
                                <div className="inp1 w-full">
                                    <label className='inline-block m-2' htmlFor="inp1">first name</label><br />
                                    <input type="text" name='firstNameOne' onChange={handleInputOne} id='inp1' placeholder='rick...' className={`capitalize border-l-3 border-white pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] focus:shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_10px_rgba(60,200,230,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errorsone.firstNameOne && <p className='border-l-3 border-white pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errorsone.firstNameOne}</p>}
                                </div>
                                <div className="inp2 w-full">
                                    <label className='inline-block m-2' htmlFor="inp2">last name</label><br />
                                    <input type="text" name='lastNameOne' onChange={handleInputOne} id='inp2' placeholder='grimes...' className={`capitalize border-l-3 border-white pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] focus:shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_10px_rgba(60,200,230,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errorsone.lastNameOne && <p className='border-l-3 border-white pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errorsone.lastNameOne}</p>}

                                </div>
                            </div>
                            <div className="columns-2 gap-4 mt-4">
                                <div className="inp3 w-full">
                                    <label className='inline-block m-2' htmlFor="inp3">email</label><br />
                                    <input type="text" name='emailOne' onChange={handleInputOne} id='inp3' placeholder='example@mail.com' className={`border-l-3 border-white pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] focus:shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_10px_rgba(60,200,230,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errorsone.emailOne && <p className='border-l-3 border-white pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errorsone.emailOne}</p>}
                                </div>
                                <div className="inp4 w-full">
                                    <label className='inline-block m-2' htmlFor="inp4">phone number</label><br />
                                    <input type="text" name='phoneNumberOne' onChange={handleInputOne} id='inp4' placeholder='+216 94 61 99 28' className={`border-l-3 border-white pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_40px_rgba(60,200,230,0.6)] focus:shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_10px_rgba(60,200,230,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errorsone.phoneNumberOne && <p className='border-l-3 border-white pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errorsone.phoneNumberOne}</p>}
                                </div>
                            </div>
                            <textarea name="messageone" id="" onChange={handleInputOne} className={`border-l-3 border-white pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_25px_rgba(60,200,230,0.6)]  focus:shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_10px_rgba(60,200,230,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-40  rounded-md p-4 mt-14 resize-none `} placeholder='What Skills Do You Have And Why Do You Want To Work With Me ...'></textarea>
                            {errorsone.messageone && <p className='border-l-3 border-white pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errorsone.messageone}</p>}
                            <button id="" className=' text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(60,200,230,0.6),inset_0_0_80px_rgba(60,200,230,0.6)]  focus:shadow-[0_0_7px_#000,inset_0_0_40px_#000] transition-all duration-200 font-semibold outline-none  w-full min-h-8  rounded-md p-4 my-12 hover:shadow-[0_0_7px_#10000,inset_0_0_40px_#000]' >send request</button>

                        </form>
                    </div>
                </div>
                </Tilt>
                <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                tiltReverse={false}
                perspective={2000}
                scale={1}
                transitionSpeed={5000}
                >
                <div className=" bg-[#63606028] w-full min-h-96 rounded-xl px-6 py-2 mt-6  border-2 border-gray-700">
                    <div className="text-gray-200 text-2xl font-bold text-center py-4 pb-6  flex justify-center items-center  ">let's talk <MdWavingHand className='inline-block ml-2' /> </div>
                    <div className="flex justify-center items-center px-12 ">
                        <form id='formtwo' ref={formRef} action="" className={` w-full`} onSubmit={handleSubmit}>
                            <div className="columns-2 gap-4 mb-6">
                                <div className="inp1 w-full">
                                    <label className='inline-block m-2' htmlFor="inpu1">first name</label><br />
                                    <input type="text" name='firstName' onChange={handleInput} id='inpu1' placeholder='john...' className={`capitalize border-l-4 border-purple-700 pl-1 text-white bg-[rgba(23,23,23,0.14)] shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(0,0,0,0.6)] focus:shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(0,0,0,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errors.firstName && <p className='border-l-3 border-purple-700 pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errors.firstName}</p>}
                                 </div>
                                <div className="inp2 w-full">
                                    <label className='inline-block m-2' htmlFor="inpu2">last name</label><br />
                                    <input type="text" name='lastName' onChange={handleInput} id='inpu2' placeholder='wick...' className={`capitalize border-l-4 border-purple-700 pl-1 text-white bg-[rgba(23,23,23,0.14)] shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(0,0,0,0.6)] focus:shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(0,0,0,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errors.lastName && <p className='border-l-3 border-purple-700 pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errors.lastName}</p>}

                                </div>
                            </div>
                            <div className="columns-2 gap-4 mt-4">
                                <div className="inp3 w-full">
                                    <label className='inline-block m-2' htmlFor="inpu3">email</label><br />
                                    <input type="text" name='email' onChange={handleInput} id='inpu3' placeholder='example@mail.com' className={`border-l-4 border-purple-700 pl-1 text-white bg-[rgba(23,23,23,0.14)] shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(0,0,0,0.6)] focus:shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(0,0,0,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errors.email && <p className='border-l-3 border-purple-700  pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errors.email}</p>}
                                </div>
                                <div className="inp4 w-full">
                                    <label className='inline-block m-2' htmlFor="inpu4">phone number</label><br />
                                    <input type="text" name='phoneNumber' onChange={handleInput} id='inpu4' placeholder='+216 94 61 99 28' className={`border-l-4 border-purple-700 pl-1 text-white bg-[rgba(23,23,23,0.14)] shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(0,0,0,0.6)] focus:shadow-[0_0_7px_rgba(0,0,0,0.6),inset_0_0_10px_rgba(0,0,0,0.6)] transition-all duration-200 font-semibold outline-none  w-full h-8  rounded-md p-4 `} />
                                    {errors.phoneNumber && <p className='border-l-3 border-purple-700  pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errors.phoneNumber}</p>}
                                </div>
                            </div>
                            <textarea name="message" id="" onChange={handleInput} className={`border-l-4 border-purple-700 pl-1 text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(106,90,205,.9),inset_0_0_20px_rgba(106,90,205,.9)]  focus:shadow-[0_0_7px_rgba(106,90,205,0.9),inset_0_0_10px_rgba(106,90,205,0.9)] transition-all duration-200 font-semibold outline-none  w-full h-40  rounded-md p-4 mt-14 resize-none `} placeholder='Describe The Website You Want To Build...'></textarea>
                                    {errors.message && <p className='border-l-3 border-purple-700  pl-1 font-mono absolute mt-2 text-sm lowercase text-[#FF0000] font-semibold'>{errors.message}</p>}
                            <button id="" className=' text-white bg-[rgba(0,0,0,0.4)] shadow-[0_0_7px_rgba(106,90,205,0.9),inset_0_0_60px_rgba(106,90,205,0.9)]  focus:shadow-[0_0_7px_#000,inset_0_0_40px_#000] transition-all duration-200 font-semibold outline-none  w-full min-h-8  rounded-md p-4 my-12 hover:shadow-[0_0_7px_#10000,inset_0_0_40px_#ff0000]' >ask</button>

                        </form>
                    </div>
                </div>
                </Tilt>
            </div>

        </div>
    )
}

export default Contact
