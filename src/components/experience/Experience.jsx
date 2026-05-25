import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Languages &amp; Frameworks</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Flutter &amp; Dart</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Vue.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML &amp; CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of front end */}

                <div className="experience__backend">
                    <h3>Tools &amp; Platforms</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Supabase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Git &amp; GitHub</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        {/* <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Nmap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article> */}

                        {/* <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Wireshark</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article> */}

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>REST APIs</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CI/CD Pipelines</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Figma / UI/UX</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Paystack Integration</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
