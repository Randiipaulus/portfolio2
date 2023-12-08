import React from 'react'
import './Home.css'
import me from '../images/me/me.jpg'


const Home = () => {
  return (
    <div className="all-home" id='home'>

      <div className='body-home'> 

        <div className="pic-home">
            <img src={me} alt='' className="me-home" />
        </div>

        <div className="set-home">
        
          <div className="title-home">
            <section className="name-home">Hey Am Randy Paulus</section>

            <section className="animate-home">Am a full stack developer</section>
          </div>

          <div className="text-home">
            Greetings! I'm Randy Paulus, a dedicated software engineer with a passion
          for crafting innovative solutions. Welcome to my portfolio, where I 
          showcase my journey through a comprehensive full-stack software engineering
          program and highlight the diverse projects I've undertaken.
          </div>

          <div className="btns-home">
            <a href="#about" className="link-home" id='button'>More About Me</a>
            <a href="https://docs.google.com/document/d/1BH7ABF_Vxn8tqcsco-C_fGfAQhqbakxeYRKZGtZmw9Y/edit"
            className="resume-home" target="_blank" id='button' rel="noreferrer">See Resume</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home