import React from 'react'
import {GrMail} from 'react-icons/gr/index'
import { BsWhatsapp,BsTelephone } from 'react-icons/bs'

const Contact = () => {

  return (
    <>
        <h1 className='text-center text-3xl font-bold pt-[2rem]'>Contact Me</h1><br/>
        <h1 className='text-center text-3xl font-bold pb-[2rem]'>Let's Have A Chat.</h1>
    <div id='contact' className='contacts'>
        <div className='flex items-center justify-between gap-4 texts flex-wrap px-[8rem]'>
          <div>
         <div className='flex items-center gap-2 py-6'>
          <span className='text-3xl'><GrMail/></span>
          <a href="mailto:sundar170802@gmail.com" target="blank" className='text-3xl'>sundar170802@gmail.com</a>
         </div>
         <div className='flex items-center gap-2 py-6'>
          <span className='text-3xl'><BsWhatsapp/></span>
          <a href="/" target="blank" className='text-3xl'>1234567890</a>
         </div>
         <div className='flex items-center gap-2 py-6'>
          <span className='text-3xl'><BsTelephone/></span>
          <a href="/" target="blank" className='text-3xl'>9876543210</a>
         </div>
         </div>
         <div>
           <div><textarea className="textarea textarea-info" placeholder="Enter You Name" rows={1} cols={50}></textarea></div>
           <div><textarea className="textarea textarea-info" placeholder="Enter You Email" rows={1} cols={50}></textarea></div>
           <div className='message'><textarea className="textarea textarea-info" placeholder="Enter You Message Here" rows={8} cols={50}></textarea></div>
           <div className='flex items-center justify-center'><button className='btn btn-accent text-xl' onClick={() => window.location = 'mailto:yourmail@domain.com'}>Send Message</button></div>
         </div>
       </div>
  </div>
  </>
  )
}

export default Contact