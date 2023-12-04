import React, { useState } from 'react'
import './about.css'
import Popup from '../popupWindow/Popup';
const About = () => {
    const [popupWindow, setPopupWindow] = useState(false);
    const copyToClipBoard = ()=>{
        navigator.clipboard.writeText("ms6711534@gmail.com");
        setPopupWindow(true);
        setTimeout(() => {
            setPopupWindow(false);
        }, 1000);
    }
    return (
        
        <div className='about' id='about'>
            <h3 className='aboutText'>About</h3>
            <div className='aboutContent'>
            <h3>I am Mihir Soni</h3>
            <p>Passionate web developer with a knack for crafting visually stunning and user-centric websites. Proficient in [your core technologies], I combine creativity with technical expertise to deliver seamless digital experiences. Committed to staying at the forefront of industry trends, I bring a dynamic approach to every project, ensuring high-quality, performance-driven results.</p>
            <p>Drop me a mail @ ms6711534@gmail.com <i onClick={copyToClipBoard} class='bx bx-copy'></i></p>
            {
                popupWindow&&<Popup/>
            }
            <p><i className='bx bxs-map'></i>Chapra, Bihar</p>
            <p style={{cursor:'pointer',width:'max-content'}} onClick={() => navigator.clipboard.writeText(8340504980)}><i className='bx bxs-phone'></i>8340504980</p>
            </div>
        </div>
    )
}

export default About