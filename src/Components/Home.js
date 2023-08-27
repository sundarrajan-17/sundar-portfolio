import React from 'react';
import Profile from '../Images/sundarphoto.jpg'
import {FaReact} from 'react-icons/fa'
import {IoStarOutline} from 'react-icons/io5'
import {GoRocket} from 'react-icons/go'
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'

const Home = () => {
  return (
    <div className="home flex items-center p-[1%]" id="home">
      <div className='animation1 absolute'>
          <span className='icon1'><FaReact/></span>
      </div>
      <div className='animation2 absolute'>
          <span className='icon2'><IoStarOutline/></span>
      </div>
      <div className='animation3 absolute'>
          <span className='icon2'><GoRocket/></span>
      </div>
      <div className='w-[60%] p-[3%] flex flex-col gap-2 lg:gap-6'>
         <h1 className='text-6xl'>Hey,There !</h1>
         <h1 className='text-5xl'>I Am SUNDARRAJAN</h1>
         <p className='text-5xl tracking-wide'>Web Developer and Programmer</p>
         <ul className='flex gap-5 text-3xl py-5 social-media-icons'>
          <li><a href="https://www.facebook.com/profile.php?id=100022079460844" target='blank'><BsFacebook/></a></li>
          <li><a href="https://www.instagram.com/sundar_178/" target='blank'><BsInstagram/></a></li>
          <li><a href="https://www.linkedin.com/in/sundarrajan-p-988634213/" target='blank'><BsLinkedin/></a></li>
          <li><a href="https://github.com/sundarrajan-17" target='blank'><BsGithub/></a></li>
         </ul>
         <button className='btn btn-accent w-[12rem] text-lg'><a href="#projects">SEE MY WORK</a></button>
      </div>
      <div className='w-[40%] p-[3%]'>
         <img src={Profile} alt='profile-pic' className='w-[90%]'/>
      </div>
    </div>
  )
}

export default Home