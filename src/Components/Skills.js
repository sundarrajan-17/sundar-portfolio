import React from 'react'

const Skills = () => {
  return (
    <div className='skills p-10' id='skills'>
        <h1 className='text-center text-5xl tracking-wider font-bold'>SKILLS</h1>
        <div className='py-[3rem] skill-pics'>
            <ul className='flex items-center flex-wrap p-7 skill-icon gap-[4rem] justify-center'>
              <li><img src='./Images/html.png' alt='html-logo' /></li>  
              <li><img src='./Images/css.png' alt='css-logo' /></li>  
              <li><img src='./Images/js.png' alt='js-logo' /></li>  
              <li><img src='./Images/react.png' alt='react-logo' /></li>  
              <li><img src='./Images/git.png' alt='git-logo' /></li>  
              <li><img src='./Images/github.png' alt='github-logo' /></li>  
              <li><img src='./Images/c.png' alt='c-logo' /></li>  
              <li><img src='./Images/java.png' alt='java-logo' /></li>  
              <li><img src='./Images/python.png' alt='python-logo' /></li>  
            </ul>
        </div>
    </div>
  )
}

export default Skills