import React from 'react';
import './intro.css';
import HandWaveEmoji from '../../assets/HandWaveEmoji.png';
import Dp from '../../assets/DP-For-Portfolio.png';
const Intro = () => {
    const handleResume = ()=>{
        window.open('https://drive.google.com/file/d/1YoDLwsxuWh3jOHEgTC76LVezh9Y6WI1j/view?usp=sharing','_blank')
        
    }
    return (
        <div className='home' id='home'>
            <div className='leftSide'>
                <p><img src={HandWaveEmoji} alt="" /> Hi!</p>
                <p>I'm <span className='myName'>Mihir Soni</span></p>
                <p>FrontEnd Developer</p>
                <div className='homeBtnDiv'>
                <a href='Mihir-Soni-Resume.pdf' download='Mihir-Soni-Resume.pdf'><button className='homeBtn' onClick={handleResume}>Resume</button></a>
                </div>
            </div>
            <div className='rightSide'><img src={Dp} alt="" /></div>
        </div>
    )
}

export default Intro
