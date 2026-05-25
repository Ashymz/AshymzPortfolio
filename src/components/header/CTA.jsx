import React from 'react'
import CV from '../../assets/AshimolowoIsmail resume 2.pdf'

const CTA = () => {
    return (
        <div>
            <div className='cta'>
                <a href={CV} download="Ashimolowo-Ismail-Resume.pdf" className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    )
}

export default CTA