import React from 'react'

const About = () => {
  return (
    <div className='about flex items-center p-[3%] gap-[6%]' id="about">
        <div className='w-[45%] md:w-[35%] image'>
            <img src='./Images/sundarphoto.jpg' alt='profile-pic' className='w-[90%]'/>
        </div>
        <div className='w-[55%] text-3xl content'>
            <h1 className='text-center text-5xl p-[6%] font-semibold'>About Me</h1>
            <p className='tracking-wide leading-9 p1'>I'm a passionate and innovative web developer with a thinking of turning ideas into stunning digital experiences. From crafting responsive layouts to breathing life into interfaces with dynamic interactions, coding is where my magic happens.</p>
            <p className='p2 leading-9'>I've always been fascinated by the intersection of technology and creativity, and web development is where these passions collide beautifully.</p>
            <p className='p3 leading-9'>The ability to shape ideas into tangible websites and applications is nothing short of magical to me. My adventure in the world of web development began when I first laid eyes on a line of HTML code. Since then, I've embarked on a continuous learning journey, staying up-to-date with the latest technologies and trends.</p>
        </div>
    </div>
  )
}

export default About