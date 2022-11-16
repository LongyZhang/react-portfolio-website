import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Experience = () => {

    const data = [
        {
            type: "Web development",
            content: [
                {
                    id: 1,
                    name: "HTML5",
                    comment: "Intermediate"

                },
                {
                    id: 2,
                    name: "CSS3 ,Sass ,React Icon ,Bootstrap",
                    comment: "Intermediate"

                },
                {
                    id: 3,
                    name: "React, Redux, Route",
                    comment: "Intermediate"

                },
                {
                    id: 4,
                    name: ".Net Core",
                    comment: "Intermediate"

                },
                {
                    id: 5,
                    name: "JavaScript ES6",
                    comment: "Intermediate"

                },
                {
                    id: 6,
                    name: "MVC, Entity Framework",
                    comment: "Intermediate"

                },
                {
                    id: 7,
                    name: "MSSQL,MySql",
                    comment: "Intermediate"

                },

            ]
        },
        {
            type: "Gis Development",
            content: [
                {
                    id: 1,
                    name: "GE Smallworld",
                    comment: "Intermediate"

                },
                {
                    id: 2,
                    name: "Magik Programming",
                    comment: "Intermediate"

                },
                {
                    id: 3,
                    name: "ArcGis",
                    comment: "Intermediate"

                },
                {
                    id: 4,
                    name: "QGIS",
                    comment: "Intermediate"

                },
                {
                    id: 5,
                    name: "GeoPython",
                    comment: "Intermediate"

                },
            ]
        },
        {
            type: "Other Techs",
            content: [
                {
                    id: 1,
                    name: "C++",
                    comment: "Competent"

                },
                {
                    id: 2,
                    name: "MSSQL,MySql",
                    comment: "Intermediate"

                },
                {
                    id: 3,
                    name: "GIT",
                    comment: "Intermediate"

                },
                {
                    id: 4,
                    name: "Jira, Kanban, Rmtrack,Azure Board",
                    comment: "Intermediate"

                },
                {
                    id: 5,
                    name: "Python",
                    comment: "Intermediate"

                },
                {
                    id: 6,
                    name: "Data Visualization",
                    comment: "Python, Matlab, Access"

                },
            ]
        },
        {
            type: "Soft Skills",
            content: [
                {
                    id: 1,
                    name: "Problem solving skills",
                    comment: "Reading documentation, Google, StackOverflow and Github Open Source"

                },
                {
                    id: 2,
                    name: "Efficient Communicator",
                    comment: "Good Customer skill, Team Player"

                },
                {
                    id: 3,
                    name: "Great Coding style",
                    comment: "Comment, Indentation"

                },
                {
                    id: 4,
                    name: "Presentation skills",
                    comment: "Good Public Speaker"

                },
            ]
        }
    ]

    return (
        <section id='Experience' >
            <h5>The skills i have</h5>
            <h2>My Experienece</h2>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                style={{

                    "--swiper-navigation-size": "2rem",
                }}
                className="container experience_container " >
                {data.map((obj) => {
                    return <SwiperSlide className="experience_web " key={obj.type + Date.now()}>
                        <h3>{obj.type}</h3>
                        <div className="temp">
                            {obj.content.map((subObj) => {
                                return <div className="experience_content" key={subObj.id + subObj.name}>
                                    <article className='experience_details'>
                                        <BsFillPatchCheckFill className='experience_icon' />
                                        <span>{subObj.name}</span>
                                        <small className='text_light'>{subObj.comment}</small>
                                    </article>
                                </div>

                            })}
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
        </section>
    )
}

export default Experience