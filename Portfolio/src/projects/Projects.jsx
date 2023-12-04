import React from 'react'
import './projects.css'
import projects from '../../db'
const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h3 className='projectText'>Projects</h3>
            <div className='projectList'>
                {
                    projects.map((ele) => (
                        <div className="projectcard">
                            <div className="projectImg"><img src={ele.image} alt="" /></div>
                            <div className="projectDesc">
                                <h2>{ele.title}</h2>
                                <p><span style={{fontWeight:'bold', color:'rgb(40,40,40)'}}>Description :</span> {ele.description}</p>
                                <div className='projectBtn'>
                                    <button onClick={() => window.open(ele.gitRepo, '_blank')} className="projectBtn">Github</button>
                                    <button onClick={() => window.open(ele.deploymentLink, '_blank')} className="projectBtn">Live</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
