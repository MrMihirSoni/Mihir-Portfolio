import React from 'react'
import './projects.css'
import OMDB from '../../assets/Omdb.png'
import Envoy from '../../assets/Envoy.png'
import Calculator from '../../assets/Calculator.png'
const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h3 className='projectText'>Projects</h3>
            <div className='projectList'>
                <div className="projectcard">
                    <div className="projectImg"><img src={OMDB} alt="" /></div>
                    <div className="projectDesc">
                        <h2>OMDB</h2>
                        <p><span style={{ fontWeight: 'bold', color: 'rgb(40,40,40)' }}>Description :</span> In this website I made a simple movie search engine, where you can see the rating/about/description of the movies yourself.</p>
                        <div className='projectBtn'>
                            <button onClick={() => window.open('https://jovial-sunburst-a20f02.netlify.app/', '_blank')} className="projectBtn">Github</button>
                            <button onClick={() => window.open('https://jovial-sunburst-a20f02.netlify.app/', '_blank')} className="projectBtn">Live</button>
                        </div>
                    </div>
                </div>
                <div className="projectcard">
                    <div className="projectImg"><img src={Envoy} alt="" /></div>
                    <div className="projectDesc">
                        <h2>Envoy Copy</h2>
                        <p><span style={{ fontWeight: 'bold', color: 'rgb(40,40,40)' }}>Description :</span> In this website I tried to copy the official website of 'Envoy'. Hope you like my efforts.</p>
                        <div className='projectBtn'>
                            <button onClick={() => window.open('https://github.com/MrMihirSoni/EnvoyCopy', '_blank')} className="projectBtn">Github</button>
                            <button onClick={() => window.open('https://envoy-copy.vercel.app/', '_blank')} className="projectBtn">Live</button>
                        </div>
                    </div>
                </div>
                <div className="projectcard">
                    <div className="projectImg"><img src={Calculator} alt="" /></div>
                    <div className="projectDesc">
                        <h2>Calculator</h2>
                        <p><span style={{ fontWeight: 'bold', color: 'rgb(40,40,40)' }}>Description :</span> In this website  I made a basic Calculator by just using HTML, CSS and JavaScript. Hope you like it.</p>
                        <div className='projectBtn'>
                            <button onClick={() => window.open('https://github.com/MrMihirSoni/Basic-Calculator', '_blank')} className="projectBtn">Github</button>
                            <button onClick={() => window.open('https://effortless-banoffee-e76d49.netlify.app/', '_blank')} className="projectBtn">Live</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
