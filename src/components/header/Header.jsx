import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/STA.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Sulaimon Taofeek</h1>
                <h5 className="text-light">Cyber Security Engineer (Application Penetration Tester) and FullStack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Downs</a>
            </div>
        </header>
    )
}

export default Header
