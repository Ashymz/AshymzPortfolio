import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
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
                            <h5>Experience</h5>
                            <small>4+ Years</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Projects Shipped</h5>
                            <small>7+ Apps</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Available</h5>
                            <small>Remote &amp; Onsite</small>
                        </article>
                    </div>

                    <p>
                        I&apos;m a Mobile and Frontend Engineer based in Nigeria, passionate about turning ideas into polished, production-ready products. I specialize in Flutter and Dart for cross-platform mobile development, alongside JavaScript, Vue.js, and React.js for the web. Over the past 4 years I&apos;ve shipped apps across fintech, healthcare, aviation, crypto and e-commerce - several of which are live on the App Store and Google Play. I care deeply about clean code, great user experience, and building things that actually work for real people.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
