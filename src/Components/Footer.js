import React from 'react'
import { BsFacebook,BsGithub,BsInstagram,BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex items-center justify-between bg-[#A084E8] p-3 footer'>
        <div className="text-black text-2xl flex items-center">
            <p>&copy; 2023 Copyright</p><br/>
        </div>
        <div className='text-black'>
          <ul className='flex gap-5 text-3xl py-5 items-center'>
            <li><a href="https://www.facebook.com/profile.php?id=100022079460844" target='blank'><BsFacebook/></a></li>
            <li><a href="https://www.instagram.com/sundar_178/" target='blank'><BsInstagram/></a></li>
            <li><a href="https://www.linkedin.com/in/sundarrajan-p-988634213/" target='blank'><BsLinkedin/></a></li>
            <li><a href="https://github.com/sundarrajan-17" target='blank'><BsGithub/></a></li>
           </ul>
        </div>
    </div>
  )
}

export default Footer