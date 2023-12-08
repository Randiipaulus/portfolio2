import React from 'react'
import './Project.css'
import uni from '../images/projects/uni-travel.png'
import com from '../images/projects/e-commerce.png'
import weather from '../images/projects/weather.png'
import simon from '../images/projects/simon.png'
import movie from '../images/projects/movie.png' 

const Project = () => {

  return (
    <div className='body-project' id='project'>

        <p className="title-project">My Projects</p>

        <div className="all-project">

        <div className="project-self">
                <div className="pic-project"> 
                    <img src={movie} alt="" className="photo-project" />
                </div>
                <div className="info-project">

                    <section className="name-project">Mauii-Flix</section>
                    <section className="descrip-project">
                    Designed a Netflix-inspired front-end project with React, 
                    HTML, CSS, and JavaScript. This dynamic page replicates the
                    streaming giant's immersive design, incorporating responsiveness
                    and interactive features for a modern, engaging experience.
                    Explore the fusion of cutting-edge technologies with a sleek
                    user interface.
                    </section>

                    <div className="btn-projects">
                        <a href="https://github.com/Randiipaulus/mauii-movies" className="git-project" id='button-project'
                        target="_blank" rel="noreferrer">Github</a>
                        <a href="https://mauii-movies.vercel.app/" className="live-projects" id='button-project'
                        target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>

            <div className="project-self">
                <div className="pic-project"> 
                    <img src={uni} alt="" className="photo-project" />
                </div>
                <div className="info-project">

                    <section className="name-project">Uni Travel</section>
                    <section className="descrip-project">
                    Designed and implemented a fully functional front-end for
                    a space travel company, featuring a dynamic website with
                    a functional contact form and dedicated sections. Developed
                    using HTML, React, CSS, and JavaScript to create an engaging user experience.
                    </section>

                    <div className="btn-projects">
                        <a href="https://github.com/Randiipaulus/uni-travel" className="git-project" id='button-project'
                        target="_blank" rel="noreferrer">Github</a>
                        <a href="https://uni-travel.vercel.app/" className="live-projects" id='button-project'
                        target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>

            
            <div className="project-self">
                <div className="pic-project">
                    <img src={com} alt="" className="photo-project" />
                </div>
                <div className="info-project">

                    <section className="name-project">E-commerce</section>
                    <section className="descrip-project">
                    Developed a fully functional e-commerce Shoe Store named 
                    "Premium Shoes," offering a diverse selection of sneakers
                    from different brands. Implemented a user-friendly sidebar
                    with functional filters for colors, prices, and categories.
                    Utilized HTML, React, CSS, and JavaScript for the development.
                    </section>

                    <div className="btn-projects">
                        <a href="https://github.com/Randiipaulus/e-commerce" className="git-project" id='button-project'
                        target="_blank" rel="noreferrer">Github</a>
                        <a href="https://e-commerce-rho-gold.vercel.app/" className="live-projects" id='button-project'
                        target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>

            
            <div className="project-self">
                <div className="pic-project">
                    <img src={simon} alt="" className="photo-project" />
                </div>
                <div className="info-project">

                    <section className="name-project">Simon Says</section>
                    <section className="descrip-project">
                    Developed a classic browser game an interactive Memory 
                    Challenge with full functionality. The game, built using
                    HTML, React, CSS, and JavaScript, provides an engaging
                    and interactive experience for users to test and enhance
                    their memory skills.
                    </section>

                    <div className="btn-projects">
                        <a href="https://github.com/Randiipaulus/Simon-Says" className="git-project" id='button-project'
                        target="_blank" rel="noreferrer">Github</a>
                        <a href="https://simon-says-ten.vercel.app/" className="live-projects" id='button-project'
                        target="_blank" rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>

            
            <div className="project-self">
                <div className="pic-project">
                    <img src={weather} alt="" className="photo-project" />
                </div>
                <div className="info-project">

                    <section className="name-project">Wather App</section>
                    <section className="descrip-project">
                    Created a fully functional Weather App featuring a 
                    user-friendly search bar for city selection and real-time
                    display of current weather updates. Developed using HTML,
                    React, CSS, and JavaScript.
                    </section>

                    <div className="btn-projects">
                        <a href="https://github.com/Randiipaulus/weather-app-react" className="git-project"
                        target="_blank" rel="noreferrer" id='button-project'>Github</a>
                        <a href="https://weather-app-react-mocha.vercel.app/" className="live-projects" 
                        target="_blank" rel="noreferrer"id='button-project'>Live</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Project