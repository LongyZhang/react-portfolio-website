import React from 'react'
import './About.css'
import Me from '../../images/me.jpg'
import { BiBookReader, BiBookBookmark } from "react-icons/bi";

const about = () => {
    return (
        <section id='About'>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={Me} alt="About Me" />
                    </div>

                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <BiBookReader className='about_icon' />
                            <h5>Experience</h5>
                            <small>3+ years experience</small>

                        </article>
                        <article className='about_card'>
                            <BiBookBookmark className='about_icon' />
                            <h5>Education</h5>
                            <small>Bachelor of Computer Science in University of Adelaide</small>

                        </article>
                        <article className='about_card'>
                            <BiBookReader className='about_icon' />
                            <h5>Projects</h5>
                            <small>5 completed</small>

                        </article>
                    </div>
                    <p>Passionate to step my career into DevOps rather Ops</p>
                    <p>Strong foundation in mathematics and programming logic, complimented by sound technical knowledge
                        using a range of programming and data analytics tools</p>
                    <a href="#Contact" className='btn btn-primary'> lets talk</a>
                </div>
            </div>
        </section>
    )
}

export default about