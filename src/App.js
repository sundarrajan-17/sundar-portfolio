import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import WhatIDo from './Components/WhatIDo'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <WhatIDo/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App