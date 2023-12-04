import React from 'react'
import './popup.css'
const Popup = () => {
    return (
        <>
            <p style={{
                color: 'rgb(250, 220, 170)',
                width: 'max-content',
                fontSize: '1.2rem',
                margin:'auto'
            }} className='popup'>Email copied to clipboard!</p>
        </>
    )
}

export default Popup
