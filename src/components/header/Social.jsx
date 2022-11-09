import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Social = () => {
    let linkin = "https://www.linkedin.com/in/longy-zhang-329787165/"
    let github = "https://github.com/LongyZhang"
    return (
        <div className='header_social'>
            <a href={linkin} target="_blank"><AiFillLinkedin /></a>
            <a href={github} target="_blank"> <AiOutlineGithub /> </a>

        </div>
    )
}

export default Social