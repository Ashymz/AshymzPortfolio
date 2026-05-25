import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai';


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ashymz/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/ashymz/" target="_blank"><FaGithub /></a>
            {/* <a href="http://nguyenvu1310.github.io/" target="_blank"><ImBlogger2 /></a> */}
            <a href="https://x.com/ashymzjr/" target="_blank"><BsTwitter /></a> 
            
            <a href="mailto:karohunwiashimolowo@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail/>
            </a>
        </div>
    )
}

export default HeaderSocials