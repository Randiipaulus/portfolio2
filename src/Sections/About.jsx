import React from 'react'
import './About.css'
import me from '../images/about me/me.jpg'
import gym from '../images/about me/gym.jpg'
import jesu from '../images/about me/jesu.jpg'
import hallo from '../images/about me/hallo.png'
import leo from '../images/about me/leo.jpg'
import rd from '../images/about me/rd.jpg'
import fri from '../images/about me/fri.jpg'


const About = () => {
  return (
    <div className='body-about' id='about'>

        <p className="title-about">About Me</p>
        
        <div className="all-about">

            <div className="left-pic">
                <img src={me} alt='' className="me2-about" />
            </div>

            <div className="text-about">In the realm beyond code, 
            I'm a fitness enthusiast, finding strength in the gym, 
            and a devoted family and friend member. I thrive on learning,
            exploring diverse subjects, and relishing new foods especially 
            since I eat alot. Challenges fuel my passion; I enjoy dissecting
            problems, crafting innovative solutions, and making meaningful
            strides.</div>

            <div className="hobbies-about">

                <p className="hobbie-title">My Hobbies</p>

                <div className="hobbies-pics">

                <div className="hobbies-left">
                    <img src={gym} alt='' className="left-side" />
                    <img src={jesu} alt='' className="left-side" />
                    <img src={hallo} alt='' className="left-side" />
                </div>

                <div className="hobbies-rigth">
                    <img src={leo} alt='' className="rigth-side" />
                    <img src={rd} alt='' className="rigth-side" />
                    <img src={fri} alt='' className="rigth-side" />
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default About