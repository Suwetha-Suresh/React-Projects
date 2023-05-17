import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div  className='ui raised very padded text container segment opacity' >
            <h2 className='ui header'>About Us!</h2>
            <p> 
                The main objective of this application is to provide an unanimous platform where the
                 members of the institution and the students can share and communicate information.
                  The students can build their own profile and upload all the necessary information 
                  needed for other students. The staffs can upload the study materials in the form of 
                  pdfs and links. The students can manage and keep record of their marks and attendance . 
                  This way the information flow is directional and reaches each of the members of the 
                  institution individually.
                  <br/> <br/>
                  Blockchain technology has the potential to revolutionize the education sector, from 
                  the way students are assessed to how they store and manage their records and create 
                  more personalized learning experiences. By leveraging the power of distributed ledger
                   technology, educational institutions can create a secure, tamper-proof system for 
                   tracking and authenticating student records, grades, and other important data.
            </p>
            
        </div>
    </div>
  )
}

export default About