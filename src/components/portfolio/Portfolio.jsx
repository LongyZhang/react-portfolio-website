import React from 'react'
import './Portfolio.css'
import img1 from '../../images/portfolio1.jpg'
import img2 from '../../images/portfolio2.jpg'
import img3 from '../../images/portfolio3.jpg'
import img4 from '../../images/portfolio4.jpg'


const Portfolio = () => {
    let github1 = "https://github.com/LongyZhang/react-portfolio-website"

    const data = [
        {
            id: 1,
            img: img1,
            title: "My Project 1",
            github: "https://github.com/LongyZhang/react-portfolio-website",
            demo: "https://github.com/LongyZhang/react-portfolio-website"
        },
        {
            id: 2,
            img: img2,
            title: "My Project 2",
            github: "https://github.com/LongyZhang/react-portfolio-website",
            demo: "https://github.com/LongyZhang/react-portfolio-website"
        },
        {
            id: 3,
            img: img3,
            title: "My Project 3",
            github: "https://github.com/LongyZhang/react-portfolio-website",
            demo: "https://github.com/LongyZhang/react-portfolio-website"
        },
        {
            id: 4,
            img: img4,
            title: "My Project 4",
            github: "https://github.com/LongyZhang/react-portfolio-website",
            demo: "https://github.com/LongyZhang/react-portfolio-website"
        }

    ]

    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map((obj) => {
                        return <div key={obj.id} className='portfolio_item'>
                            <div className="portfolio_item_img">
                                <img src={obj.img} alt={obj.title} />
                            </div>
                            <h3>{obj.title}</h3>
                            <div className="portfolio_item_cta">
                                <a href={obj.github} className="btn btn_primary" target='_blank'>Github</a>
                                <a href={obj.demo} className="btn btn_primary" target='_blank'>Live Demo</a>
                            </div>

                        </div>


                    })}
            </div>
        </section>
    )
}

export default Portfolio