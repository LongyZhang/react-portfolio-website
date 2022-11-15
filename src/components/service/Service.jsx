import React from 'react'
import './Service.css'
import wdi from '../../images/download.png'
import air from '../../images/airborne-logo.png'

const Service = () => {
    return (
        <section id='Service'>

            <h5>In Australia</h5>
            <h2>Industry Experiences</h2>
            <div className="container industry_container" >
                <div className="industry_wdi">

                    <div className="exp_content">
                        <article className='exp_detail'>
                            <a href="https://we-do-it.com/" target='_blank'> <img src={wdi} alt="" className='logo1' /> <small className="click_web">Website</small></a>

                            <small>July 2021 - Present</small>
                            <small className='title'>Title: Software Develoepr</small>
                            <h5>● <span> Develops, maintains, unit tests and deploys</span> multiple Projects on Smallworld by using Magik language(OOP),
                                Batch Script, it achieves the automated data processing, automated log files,automated archive to specific folder.</h5>
                            <h5>● <span>Migrated</span> the GIS team source code from Visual Source Safe to GIT, and introduced the GIS version control
                                solution to client’s GIS team.
                            </h5>
                            <h5>● <span>Participated</span>  in the monthly Smallworld deployment and OS patching for the client's GIS system.</h5>
                            <h5>● <span>Developed</span>  the automation ticket transferring system between Outlook and vFire by using MS Power automate.
                            </h5>

                        </article>
                    </div>
                </div>
                <div className="industry_air">

                    <div className="exp_content">
                        <article className='exp_detail' >
                            <a href="https://airbornelogic.com.au/" target='_blank'> <img src={air} alt="" className='logo2' /><small className="click_web">Website</small></a>
                            <small>Nov 2020 - 2021 April</small>
                            <small className='title'>Title: Spatial Data technician</small>

                            <h5>● <span>Use</span>  QGIS and ArcGIS software to label spatial datasets for analyzing expected vegetation yield (vineyard, fruit
                                trees, and crops)</h5>
                            <h5>● <span>Use</span> QGIS and ArcGIS software to create RGB maps for the viticultural and horticultural sites, successfully
                                increasing company revenue.
                            </h5>
                            <h5>● <span>Apply Machine Learning</span> Algorithm  (unsupervised and supervised) to classify spatial image data.
                            </h5>
                            <h5>● <span>Developed</span> Python script to reorder and label data automatically</h5>
                            <h5>● <span>Received Onsite safety training</span>  and Participated in drone data collection at a range of horticultural and
                                viticultural sites around SA.
                            </h5>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Service