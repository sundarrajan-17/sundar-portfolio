import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {MdDeveloperMode} from 'react-icons/md';
import {HiOutlineLightBulb} from 'react-icons/hi/index'

const WhatIDo = () => {
  return (
    <div>
        <h1 className="text-center text-5xl py-4">My Services</h1>
        <div className='service-contents flex items-center justify-center gap-10 py-10 flex-wrap'>
          <div className="card w-96 bg-base-100 shadow-xl border-2 border-black">
            <figure className="px-10 pt-10">
               <i className='text-5xl'><FaUserCircle/></i>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">User-Centric Approach</h2>
                <p className='text-lg'>Understanding the user's perspective is at the core of my work. Websites I develop aren't just visually pleasing – they're intuitive and user-friendly.</p>
                <div className="card-actions">
                    <button className="btn btn-primary service-btn">Read More</button>
                </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border-2 border-black">
            <figure className="px-10 pt-10">
               <i className='text-5xl'><MdDeveloperMode/></i>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Web Developer</h2>
                <p className='text-lg'>Every, Website should built with two primary goals, Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                <div className="card-actions">
                    <button className="btn btn-primary service-btn">Read More</button>
                </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl border-2 border-black">
            <figure className="px-10 pt-10">
               <i className='text-5xl'><HiOutlineLightBulb/></i> 
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">Problem Solving And Algorithm Design</h2>
                <p className='text-lg'>The art of finding the solution, for the perplexing, distressing, vexing or unsettled questions</p>
                <div className="card-actions">
                    <button className="btn btn-primary service-btn">Read More</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhatIDo