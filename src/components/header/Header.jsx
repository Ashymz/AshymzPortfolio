import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Ashimolowo Ismail Karohunwi</h1>
                <h5 className="text-light">Mobile &amp; Frontend Engineer</h5>
                <h5 className="text-light">I build apps that ship - from idea to App Store and Play Store.</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header
