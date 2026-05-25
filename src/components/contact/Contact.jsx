import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('', '', form.current, '')

        e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>karohunwiashimolowo@gmail.com</h5>
                        <a href="mailto:karohunwiashimolowo@gmail.com" target="_blank">Send a message</a>
                    </article>

                    {/* <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Sulaimon Taofeek</h5>
                        <a href="https://m.me/" target="_blank" >Send a message</a>
                    </article> */}

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Ashimolowo Ismail</h5>
                        <a href="https://www.linkedin.com/in/ashymz/" target="_blank" rel="noreferrer">Let&apos;s connect on LinkedIn</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email Address' required />
                    <textarea name='message' rows="7" placeholder='Tell me about your project...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact