import React from 'react'
import {FaBars} from "react-icons/fa"
import {AiOutlineHome} from 'react-icons/ai/index'
import {RiUserSettingsLine} from 'react-icons/ri/index'
import {BiUserCircle} from 'react-icons/bi'
import {LiaProjectDiagramSolid} from 'react-icons/lia'
import {BsTelephone} from 'react-icons/bs'

const Header = () => {

  return (
    <div className='flex items-center justify-between bg-[#A084E8] p-4 header'>
        <div className='font-bold tracking-wide text-3xl flex items-center'>
            {/* <img src='./sundarphoto.jpg' alt="profile-pic" className='w-[90px] h-[75px]'/> */}
            <ul className='name-list flex'>
                <li>S</li>
                <li>U</li>
                <li>N</li>
                <li>D</li>
                <li>A</li>
                <li>R</li>
                <li>R</li>
                <li>A</li>
                <li>J</li>
                <li>A</li>
                <li>N</li>
            </ul>
        </div>
        <div className='text-xl font-semibold text-[#19376D] nav'>
            <ul className='nav-bar flex gap-5'>
                <li><AiOutlineHome/><a href='#home'>HOME</a></li>
                <li><BiUserCircle/><a href='#about'>ABOUT</a></li>
                <li><RiUserSettingsLine/><a href='#skills'>SKILLS</a></li>
                <li><LiaProjectDiagramSolid/><a href='#projects'>PROJECTS</a></li>
                <li><BsTelephone/><a href='#contact'>CONTACT</a></li>
            </ul>
        </div>
        <details className="dropdown dropdown-left">
            <summary className="m-1 btn"><FaBars/></summary>
                <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 nav-bar">
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#skills'>SKILLS</a></li>
                    <li><a href='#projects'>PROJECTS</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                </ul>
        </details>
    </div>
  )
}

export default Header