import React from 'react'
import './Portfolio.css'
import img1 from '../../images/portfolio1.png'
import img2 from '../../images/portfolio2.png'
import img3 from '../../images/portfolio3.png'
import img4 from '../../images/portfolio4.png'


const Portfolio = () => {
    let github1 = "https://github.com/LongyZhang/react-portfolio-website"

    const data = [
        {
            id: 1,
            img: img1,
            title: "My Personal Portfolio",
            github: "https://github.com/LongyZhang/react-portfolio-website",
            demo: "https://longyzhang.github.io/react-portfolio-website"
        },
        {
            id: 2,
            img: img2,
            title: "Github Community contribution for Vscode Extension",
            github: "https://github.com/Systemap/smallworld-magik-vscode/issues/15",
        },
        {
            id: 3,
            img: img3,
            title: "LaTeX Resume Template",
            github: "https://github.com/LongyZhang/Latex-Overleaf-Resume-Template",
        },
        {
            id: 4,
            img: img4,
            title: "AWS Lambda Func and Step Function",
            github: "https://github.com/LongyZhang/Lambda-function",
        },

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