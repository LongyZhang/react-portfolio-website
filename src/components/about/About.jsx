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
                    <p>AWS-certified Cloud System Administrator with a Bachelor’s in Computer Science and 2+ years of experience managing enterprise-scale infrastructure across multi-region deployments serving 10,000+ users</p>
                    <p>Designed and operated personal cloud environments with Terraform and Ansible, using EC2-base and Docker-deployed GitLab and Jenkins CI/CD to simulate real-world DevOps pipelines</p>
                    <a href="#Contact" className='btn btn-primary'> lets talk</a>
                </div>
            </div>
        </section>
    )
}

export default about