import React from 'react'
import './about.css'
import ME from '../../assets/STA.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Expert</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Penetration Tester</h5>
                            {/* <small>5 Years Experience with Docker, Kubernetes, AWS, Azure</small> */}
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>+11 Completed</small>
                        </article>
                    </div>

                    <p>
                        Hello, I'm a dedicated Software Developer with 4 years of experience, and I also have over 3 years of experience in Application Security/ API Security. My passion lies in crafting secure and efficient software solutions. Alongside my development work, I have a strong focus on cybersecurity, ensuring that the applications I build are not only functional but also secure. I'm actively honing my skills on platforms like PortSwigger, APISEC and TryHackMe, staying up-to-date with the latest trends and techniques in cybersecurity. I thrive on solving complex problems and continuously learning new technologies to stay ahead in the fast-evolving tech landscape.                
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
