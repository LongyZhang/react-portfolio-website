import React from 'react'
import './Service.css'
import wdi from '../../images/download.png'
import air from '../../images/airborne-logo.jpg'

const Service = () => {
    return (
        <section id='Service'>

            <h5>In Australia</h5>
            <h2>Industry Experiences</h2>
            <div className="container industry_container" >
                <div className="industry_air">

                    <div className="exp_content">
                        <article className='exp_detail' >
                            <a href="https://esriaustralia.com.au/" target='_blank'> <img src={air} alt="" className='logo2' /><small className="click_web">Website</small></a>
                            <small>Jan 2023 - Present</small>
                            <small className='title'>Title: Cloud System Administrator</small>

                            <h5>● <span>Manage</span> and Troubleshoot Network and infrastructure requests for a few hundred EC2 Instances including Windows and Linux.</h5>
                            <h5>● <span>Maintain</span> and troubleshoot high availability ArcGIS Application on the AWS.
                            </h5>
                            <h5>● <span>Develope</span> Powershell and Python scripts for patching and daily BAU work.
                            </h5>
                            <h5>● <span>Automate</span> Automated resource Audit work over few hundred of EC2 instance, RDS by Python(Boto3, Panda, OS..etc)</h5>
                            <h5>● <span>Monitor</span> hosted system by using Pingdom, AWS Cloudwatch and Sumologic, Manage and implement SSL certificates for clients</h5>
                            <h5>● <span>Participate</span>the software deployment work by using the Ansible automation platform and Terraform cloud.</h5>
                            <h5>● <span>Participate</span> the monthly OS and ArcGIS Software patching for the client's hosted system.</h5>
                        </article>
                    </div>
                </div>
                <div className="industry_wdi">

                    <div className="exp_content">
                        <article className='exp_detail'>
                            <a href="https://we-do-it.com/" target='_blank'> <img src={wdi} alt="" className='logo1' /> <small className="click_web">Website</small></a>

                            <small>July 2021 - Jan 2023</small>
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
            </div>

        </section>
    )
}

export default Service