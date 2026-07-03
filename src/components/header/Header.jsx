import React from 'react'
import './header.css'
import CTA from './CTA'
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
                    <img
                        src="/me.jpg"
                        alt="me"
                        fetchPriority="high"
                        decoding="async"
                        width={352}
                        height={480}
                    />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header
