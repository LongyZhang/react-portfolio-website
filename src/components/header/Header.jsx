import React from 'react'
import './Header.css'
import CTA from './CTA'
import Social from './Social'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I am</h5>
                <h1>Longy Zhang</h1>
                <h5 className="text-light">FullStack Developer </h5>
                <CTA />
                <Social />
                {/* <div className="me">
                    <img src={me} alt="me" />
                </div> */}
                <a href="#Contact" className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header