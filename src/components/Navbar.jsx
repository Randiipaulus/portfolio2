import React from 'react'
import './Navbar.css'
import { FaHome, FaNewspaper } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { MdFolderShared } from "react-icons/md";

const Navbar = () => { 

  return (
    <div className="body-nav">

        <div className="list-nav">

            <div className="item-nav">
                <a href="#home" className="icon-nav"><FaHome className='icon-item'/></a>
                <a href='#home' className='text-navbar'>Home</a>
            </div>
            <div className="item-nav">
                <a href='#about' className="icon-nav"><IoIosPerson className='icon-item'/></a>
                <a href='#about' className='text-navbar'>About</a>
            </div>
            <div className="item-nav">
                <a href='#skills' className="icon-nav"><FaFolderOpen className='icon-item'/></a>
                <a href='#skills' className='text-navbar'>Skills</a>
            </div>
            <div className="item-nav">
                <a href='#edu' className="icon-nav"><FaNewspaper className='icon-item'/></a>
                <a href='#edu' className='text-navbar'>Edu & Exp</a>
            </div>
            <div className="item-nav">
                <a href='#project' className="icon-nav"><PiProjectorScreenChartBold className='icon-item'/></a>
                <a href='#project' className='text-navbar'>Projects</a>
            </div>
            <div className="item-nav">
                <a href='#contact' className="icon-nav"><MdFolderShared className='icon-item'/></a>
                <a href='#contact' className='text-navbar'>Contact Me</a>
            </div>

        </div>

    </div>
  )
}

export default Navbar
