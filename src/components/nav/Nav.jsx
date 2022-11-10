import React from 'react'
import { AiOutlineHome, AiOutlineProject, AiFillCustomerService } from "react-icons/ai";
import { BiUserCircle, BiBookReader } from "react-icons/bi";
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <a href="#"> <AiOutlineHome /></a>
            <a href="#About"> <BiUserCircle /></a>
            <a href="#Experience"> <BiBookReader /></a>
            <a href="#Portfolio"> <AiOutlineProject /></a>
            <a href="#Service"> <AiFillCustomerService /></a>
            <a href="#Service"> <AiFillCustomerService /></a>
        </nav>
    )
}

export default Nav