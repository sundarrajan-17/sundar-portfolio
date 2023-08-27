import React from 'react';
import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import git from '../Images/git.png'
import github from '../Images/github.png'
import c from '../Images/c.png'
import java from '../Images/java.png'
import python from '../Images/python.png'
import react from '../Images/react.png'

const Skills = () => {
  return (
    <div className='skills p-10' id='skills'>
        <h1 className='text-center text-5xl tracking-wider font-bold'>SKILLS</h1>
        <div className='py-[3rem] skill-pics'>
            <ul className='flex items-center flex-wrap p-7 skill-icon gap-[4rem] justify-center'>
              <li><img src={html} alt='html-logo' /></li>  
              <li><img src={css} alt='css-logo' /></li>  
              <li><img src={js} alt='js-logo' /></li>  
              <li><img src={react} alt='react-logo' /></li>  
              <li><img src={git} alt='git-logo' /></li>  
              <li><img src={github} alt='github-logo' /></li>  
              <li><img src={c} alt='c-logo' /></li>  
              <li><img src={java} alt='java-logo' /></li>  
              <li><img src={python} alt='python-logo' /></li>  
            </ul>
        </div>
    </div>
  )
}

export default Skills