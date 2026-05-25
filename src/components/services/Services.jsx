import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__containter">
                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Mobile Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Cross-platform app development with Flutter &amp; Dart</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>App Store and Google Play Store deployment</p>
                        </li>
                      
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Biometric authentication and secure payment integration</p>
                        </li>
                        
                        {/* <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Network Forensics</p>
                        </li> */}
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Real-time features with Firebase and Supabase</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Performance optimization and crash debugging</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>End-to-end delivery from design handoff to launch</p>
                        </li>
                        {/* <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Incident Response</p>
                        </li> */}
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Responsive web interfaces with Vue.js and React.js</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Component-based architecture and clean UI implementation</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>API integration and dynamic data rendering</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Cross-browser compatibility and performance tuning</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Tailwind CSS and Bootstrap for rapid, polished layouts</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Consulting &amp; Mentorship</h3>
                    </div>
                    <ul className='service__list'>
                        {/* <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows 7, 8, 10 and 11</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows Server 2012 r2 </p>
                        </li> */}
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Code reviews and technical guidance for dev teams</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Curriculum design for beginner-to-intermediate developers</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Project planning and architecture advice</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Helping developers ship their first real-world app</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Open to contract and freelance engagements</p>
                        </li>
                        
                    </ul>
                </article>
                {/* End of ui/ux */}

            </div>
        </section>
    )
}

export default Services