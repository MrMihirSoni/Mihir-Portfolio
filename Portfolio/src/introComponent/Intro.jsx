import React from "react";
import "./intro.css";
import HandWaveEmoji from "../../assets/HandWaveEmoji.png";
import Dp from "../../assets/DP-For-Portfolio.png";
import MihirSoniResume from "./Mihir-Soni-Resume.pdf";
const Intro = () => {
    const handleResume = ()=>{
        window.open('https://drive.google.com/file/d/1ZQqw9QoCPSxY1Cz1mSXq5wTU9G77h6TH/view?usp=sharing','_blank')
        
    }
    return (
        <div className='home' id='home'>
            <div className='leftSide'>
                <p><img src={HandWaveEmoji} alt="" /> Hi!</p>
                <p>I'm <span className='myName'>Mihir Soni</span></p>
                <p>MERN Developer</p>
                <div className='homeBtnDiv'>
                <a href={MihirSoniResume} download='Mihir-Soni-Resume.pdf'><button className='homeBtn' onClick={handleResume}>Resume</button></a>
                </div>
            </div>
            <div className='rightSide'><img src={Dp} alt="" /></div>
        </div>
    )
}

export default Intro;
