import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { AiOutlineMail, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import crypto from 'crypto-js';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uvtjhjt', 'template_spz2l1v', form.current, 'oX0FiSa_D3HNRg2Pk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    let email = "longhanzhang999@gmail.com"
    let github = "https://github.com/LongyZhang"
    const cryptoInfo = crypto.AES.encrypt(JSON.stringify('https://m.me/zhang.longhan.39'), "secret");
    console.log({ cryptoInfo });
    const info2 = crypto.AES.decrypt(cryptoInfo.toString(), 'secret').toString(crypto.enc.Utf8).slice(1, -1);
    return (
        <section id='Contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_contrainer">
                <div className="contact_options">
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <a href={"mailto:" + email} target="_blank">Send message</a>
                    </article>
                    <article className='contact_option'>
                        <AiFillFacebook className='contact_icon' />
                        <h5>Facebook</h5>
                        <a href={info2} target="_blank">Send message</a>
                    </article>
                    <article className='contact_option'>
                        <AiFillGithub className='contact_icon' />
                        <h4>Github</h4>
                        <a href={github} target="_blank">Check Out my Github</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button className='btn btn-primary' type="submit">Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact