import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";


const Footer = () => {
    let email = "longhanzhang999@gmail.com"
    let github = "https://github.com/LongyZhang"
    let fb = 'https://m.me/zhang.longhan.39'
    return (
        <footer>
            <a href="#" className='footer_logo'>Longy@</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Service">Service</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>

            </ul>
            <div className='footer_social'>
                <a href={fb}><AiFillFacebook /></a>
                <a href={github}><AiFillGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Longy Zhang, All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer