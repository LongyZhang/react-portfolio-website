import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {

    const data = [
        {
            type: "web development",
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
                    id: 1,
                    name: "Magik Programming",
                    comment: "Intermediate"

                },
                {
                    id: 1,
                    name: "ArcGis",
                    comment: "Intermediate"

                },
                {
                    id: 1,
                    name: "QGIS",
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
                    comment: "Intermediate"

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
                    id: 1,
                    name: "Efficient Communicator",
                    comment: "Good Customer skill, Team Player"

                },
                {
                    id: 1,
                    name: "Great Coding style",
                    comment: "Comment, Indentation"

                },
                {
                    id: 1,
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
            <div className="container experience_container">
                {data.map((obj) => {
                    return <div className="experience_web">
                        <h3>{obj.type}</h3>
                        <div className="temp">
                            {obj.content.map((subObj) => {
                                return <div className="experience_content">
                                    <article className='experience_details'>
                                        <BsFillPatchCheckFill className='experience_icon' />
                                        <span>{subObj.name}</span>
                                        <small className='text_light'>{subObj.comment}</small>
                                    </article>
                                </div>

                            })}
                        </div>
                    </div>



                })}

            </div>
        </section>
    )
}

export default Experience