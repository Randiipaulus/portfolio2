import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import './Socials.css' 
  
const Socials = () => {
  return (
    <div className='body-socials'>
        
        <ul className="list-socials">
          <a href="https://www.linkedin.com/in/rpaulus/" className='items-socials' id='circle-socials' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
        
          <a href="https://github.com/Randiipaulus?tab=repositories" className='items-socials' id='circle-socials' target="_blank" rel="noreferrer"><AiFillGithub /></a>
          
          <a href="mailto:randyulises18@gmail.com" className='items-socials' id='circle-socials' target="_blank" rel="noreferrer"><BiLogoGmail /></a>

        </ul>

    </div>
  )
} 

export default Socials