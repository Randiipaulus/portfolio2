import React from 'react' 
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { SiPostman, SiMysql } from "react-icons/si";
import { DiMongodb, DiDjango } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";



const Skills = () => { 
  return (
    <div className='body-skills' id='skills'>

        <div className="title-skills">My Skills</div>

            <div className="icons-skills">

            <FaHtml5 className='icon1-S' id='icons-S'/>
            <FaCss3Alt className='icon2-S' id='icons-S'/>
            <FaPython className='icon3-S' id='icons-S'/>
            <SiPostman className='icon4-S' id='icons-S'/>
            <DiMongodb className='icon5-S' id='icons-S'/>
            <IoLogoJavascript className='icon6-S' id='icons-S'/>
            <FaReact className='icon7-S' id='icons-S'/>
            <FaNode className='icon8-S' id='icons-S'/>
            <DiDjango className='icon9-S' id='icons-S'/>
            <SiMysql className='icon10-S' id='icons-S'/>

            </div>

    </div>
  ) 
}

export default Skills