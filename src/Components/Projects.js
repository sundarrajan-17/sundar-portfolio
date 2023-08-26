import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Projects = () => {

  const projects=[
     {
        img:'./Images/project1.png',
        name:'Movie App',
        github_link:'https://github.com/sundarrajan-17/Movie',
        live_link:'https://64a79fc8420f5f2ade0125db--shiny-genie-8b1f20.netlify.app/',
     },
     {
        img:'./Images/project2.png',
        name:'Seminar Website',
        github_link:'https://github.com/sundarrajan-17/react-seminar-website',
        live_link:'https://64a79fc8420f5f2ade0125db--shiny-genie-8b1f20.netlify.app/',
     },
     {
        img:'./Images/project3.png',
        name:'Shopping App',
        github_link:'https://github.com/sundarrajan-17/shopping-app',
        live_link:'https://64a79fc8420f5f2ade0125db--shiny-genie-8b1f20.netlify.app/',
     },
     {
        img:'./Images/project4.png',
        name:'Password Generator',
        github_link:'https://github.com/sundarrajan-17/password-generator',
        live_link:'https://endearing-maamoul-a44116.netlify.app/',
     }
  ]

  return (
    <div id="projects" className='projects'>
        <h1 className='text-5xl text-center font-bold p-8'>PROJECTS</h1>
        <div className='project-section'>
        <Swiper
            slidesPerview={3}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, index) => (
              <SwiperSlide key={index}>
                <div className="h-fit w-full p-4 bg-pink-100 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-[50rem]" />
                  <h3 className="text-2xl my-4 text-black font-bold text-center">{project_info.name}</h3>
                  <div className="flex gap-3 items-center justify-center">
                    <a
                      href={project_info.github_link}
                      target="blank"
                      className="text-black font-bold bg-gray-200 rounded px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="blank"
                      className="text-black font-bold bg-gray-200 rounded px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default Projects