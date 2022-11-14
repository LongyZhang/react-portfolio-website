import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id='Experience' >
            <h5>The skills i have</h5>
            <h2>My Experienece</h2>
            <div className="container experience_container">
                <div className="experience_web">
                    <h3>Web Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>HTML5</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>CSS3 ,Sass ,React Icon ,Bootstrap </span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>JavaScript</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>React, Redux, Route, </span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>.Net Core</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                    </div>
                </div>
                <div className="experience_gis_development">
                    <h3>GIS Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>GE Smallworld</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Magik Programming</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>ArcGis</span>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>QGis</span>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience_tech">
                    <h3>Other Techs</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>C++</span>
                            <small className='text_light'>Competent</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>MSSQL,MySql</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>GIT</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Jira, Kanban, Rmtrack,Azure Board</span>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Python</span>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Data visualization</span>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience_soft">
                    <h3>Soft skills</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Problem solving skills</span>
                            <small className='text_light'>Reading documentation</small>
                            <small className='text_light'>Google,stackOverflow and Github</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Efficient communicator</span>
                            <small className='text_light'>Dealing customer</small>
                            <small className='text_light'>Good teamworker</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Great Coding style</span>
                            <small className='text_light'>Comment, indentation</small>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_icon' />
                            <span>Presentation skills</span>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience