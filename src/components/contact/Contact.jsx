import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import crypto from 'crypto-js';

const Contact = () => {

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
                        <AiOutlineMail />
                        <h4>Email</h4>
                        <h5>{email}</h5>
                        <a href={"mailto:" + email}>Send message</a>
                    </article>
                    <article className='contact_option'>
                        <AiFillFacebook />
                        <h4>Messenager</h4>
                        <h5>Facebook</h5>
                        <a href={info2}>Send message</a>
                    </article>
                    <article className='contact_option'>
                        <AiFillFacebook />
                        <h4>Github</h4>
                        <h5>{email}</h5>
                        <a href={github}>Check Out my Github</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact