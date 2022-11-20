import React from 'react'
import CV from '../../images/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download="Longy_Resume.pdf" className='btn'>Download CV</a>
            <a href="#Contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default CTA