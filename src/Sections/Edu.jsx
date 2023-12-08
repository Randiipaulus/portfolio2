import React from 'react'
import './Edu.css'


const Edu = () => {
  return (
    <div className='body-edu' id='edu'>

        <div className="title-edu">Education & Experience</div>

        <div className="table-edu">

            <div className="edu-">
 
                {/* Education here */}

                <div className="edu-section">
                    <section className="name-edu">General Assembly</section>
                    <section className="info-edu">Software Engineering Immerse |  Remote  | Jan 2023 - July 2023</section>
                    <section className="descrip-edu">Completed a 24-week full-stack software engineering
                     program, focusing on product development, programming, MVC frameworks, data modeling
                     , and collaboration. Delivered diverse projects for a robust portfolio.</section>
                </div>
                <div className="edu-section">
                    <section className="name-edu">Google Certifications</section>
                    <section className="info-edu">Google IT Support Professional Certificate |  Remote  | June 2023 - Agust 2022</section>
                    <section className="descrip-edu">Earned Google IT Support Professional Certificate, 
                    acquiring skills in troubleshooting, customer service, and IT tools. Proficient in 
                    networking, operating systems, system administration, and cloud computing.</section>


                </div>
                <div className="edu-section">
                    <section className="name-edu">Lehigh Carbon Community College</section>
                    <section className="info-edu">Physical therapist assistant |  In-Person  | Sep 2019 - May 2021</section>
                    <section className="descrip-edu">Healthcare professional, Physical Therapist Assistant
                    (PTA), works under PT supervision, providing therapy services. Assists patients
                    in recovery, enhances mobility, manages chronic pain, and aids post-surgery 
                    rehabilitation.</section>


                </div>
                <div className="edu-section">
                    <section className="name-edu">Louis E. Dieruff High School</section>
                    <section className="info-edu">High School |  In-Person  | May 2018</section>
                    <section className="descrip-edu">In high school, students engage in diverse
                    courses—English, math, science, social studies, and foreign languages. Additionally,
                    they can participate in extracurricular activities like sports, clubs, and student government.</section>


                </div>
            </div>

            {/* Experience here  */}

            <div className="exp-">

                <div className="exp-section">
                    <section className="name-exp">Software Integrator</section>
                    <section className="info-exp">Teseoc LLC | June - Present</section>
                    <section className="descrip-exp">Integrated diverse software 
                    systems to optimize data flow, achieving a 20% reduction in 
                    processing time. Streamlined integration processes, enhancing
                    overall operational efficiency.</section>
                </div>


                <div className="exp-section">
                    <section className="name-exp">Stower</section>
                    <section className="info-exp">QVC | July 2022 - May 2023</section>
                    <section className="descrip-exp">Leveraged advanced scanning 
                    and tracking technologies to optimize inventory management, 
                    resulting in a substantial reduction in stock discrepancies 
                    and overall efficiency improvement.</section>
                </div> 

                <div className="exp-section">
                    <section className="name-exp">Custumer Service</section>
                    <section className="info-exp">Morrison Healthcare | July 2020 - June 2022</section>
                    <section className="descrip-exp">Proactively enhanced patient 
                    satisfaction scores by serving as a versatile floater, seamlessly
                    transitioning between various departments.</section>
                </div> 

                <div className="exp-section">
                    <section className="name-exp">Material Handler and Team Lead</section>
                    <section className="info-exp">Sharp Corporation | Jan 2019 - Dec 2021</section>
                    <section className="descrip-exp">Developed and maintained inventory records for 
                    drugs, packaging components, and materials.</section>
                </div> 


            </div>


        </div>
    </div>
  )
}

export default Edu