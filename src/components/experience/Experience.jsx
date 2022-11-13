import React from 'react'
import './Experience.css'
import { AiFillCheckCircle } from "react-icons/ai";

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
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>HTML5</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>CSS3</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>JavaScript</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>React</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>Bootstrap</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience_gis_development">
                    <h3>GIS Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>GE Smallworld</h4>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>Magik Programming</h4>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>ArcGis</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>QGis</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience_tech">
                    <h3>Other Techs</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>C++</h4>
                            <small className='text_light'>Competent</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>MSSQL,MySql</h4>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>GIT</h4>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>Jira, Kanban, Rmtrack,Azure Board</h4>
                            <small className='text_light'>intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>Python</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience_soft">
                    <h3>Web Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>HTML5</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>CSS3</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>JavaScript</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>React</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <AiFillCheckCircle className='experience_icon' />
                            <h4>Bootstrap</h4>
                            <small className='text_light'>Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience