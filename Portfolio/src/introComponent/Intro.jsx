import React from 'react';
import './intro.css';
import HandWaveEmoji from '../../assets/HandWaveEmoji.png';
import Dp from '../../assets/DP-For-Portfolio.png';
const Intro = () => {
    return (
        <div className='home' id='home'>
            <div className='leftSide'>
                <p><img src={HandWaveEmoji} alt="" /> Hi!</p>
                <p>I'm <span className='myName'>Mihir Soni</span></p>
                <p>FrontEnd Developer</p>
                <div className='homeBtnDiv'>
                <button className='homeBtn'>Hire ME!</button>
                <button className='homeBtn'>Resume</button>
                </div>
            </div>
            <div className='rightSide'><img src={Dp} alt="" /></div>
        </div>
    )
}

export default Intro
