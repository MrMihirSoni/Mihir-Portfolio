import React from 'react';
import './intro.css';
import HandWaveEmoji from '../../assets/HandWaveEmoji.png';
import Dp from '../../assets/DP-For-Portfolio.png';
import MyResume from '../../assets/Resume.pdf'
const Intro = () => {
    const handleResume = ()=>{
        window.open('https://drive.google.com/file/d/1Tq0PxgfSDrEh-kEWBdfy49EpAA67deuM/view?usp=sharing','_blank')
        
    }
    return (
        <div className='home' id='home'>
            <div className='leftSide'>
                <p><img src={HandWaveEmoji} alt="" /> Hi!</p>
                <p>I'm <span className='myName'>Mihir Soni</span></p>
                <p>FrontEnd Developer</p>
                <div className='homeBtnDiv'>
                <button className='homeBtn' download={MyResume} onClick={handleResume}>Resume</button>
                </div>
            </div>
            <div className='rightSide'><img src={Dp} alt="" /></div>
        </div>
    )
}

export default Intro
