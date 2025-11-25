import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Learning and Achievement</h2>

            <div className="container services__containter">
                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Information Assurance Learning Path</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Web Security</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Mobile Security</p>
                        </li>
                      
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Risk Management in Information Systems</p>
                        </li>
                        
                        {/* <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Network Forensics</p>
                        </li> */}
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ethical Hacking and Offensive Security</p>
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
                        <h3>Achieve</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Web Security </b>Course on Portswigger</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Web Security </b>Course on TryHackMe</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>API Security </b>Course Certificate on APISEC Academy</p>
                        </li>
                     
                        
                        
                        
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Research Platform</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows 7, 8, 10 and 11</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Windows Server 2012 r2 </p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Kali Linux</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Virtual Box</p>
                        </li>
                        
                    </ul>
                </article>
                {/* End of ui/ux */}

            </div>
        </section>
    )
}

export default Services