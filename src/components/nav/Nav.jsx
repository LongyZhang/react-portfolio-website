import React, { useRef, useState } from 'react'
import { AiOutlineHome, AiOutlineProject, AiFillCustomerService } from "react-icons/ai";
import { BiUserCircle, BiBookReader } from "react-icons/bi";
import './Nav.css'

const Nav = () => {

    const [activeNav, setactiveNav] = useState("#")


    return (
        <nav>
            <a href="#" className={activeNav === "#" ? 'active' : ''} onClick={() => setactiveNav("#")} > <AiOutlineHome /></a>
            <a href="#About" onClick={() => setactiveNav("#About")} className={activeNav === "#About" ? 'active' : ''}> <BiUserCircle /></a>
            <a href="#Experience" onClick={() => setactiveNav("Experience")} className={activeNav === "Experience" ? 'active' : ''}> <BiBookReader /></a>
            <a href="#Portfolio" onClick={() => setactiveNav("Portfolio")} className={activeNav === "Portfolio" ? 'active' : ''}> <AiOutlineProject /></a>
            <a href="#Service" onClick={() => setactiveNav("Service")} className={activeNav === "Service" ? 'active' : ''}> <AiFillCustomerService /></a>
        </nav >
    )
}

export default Nav