import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import MS from '../../assets/MS.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleResume = ()=>{
        window.open('https://drive.google.com/file/d/1Tq0PxgfSDrEh-kEWBdfy49EpAA67deuM/view?usp=sharing','_blank')
    }
    return (
        <div className='navbar'>
            <div className='logo'> 
            <img src={MS} alt="" className='logoImg'/>
            </div>
            <div className='navigation'>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='navigationItems' >Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className='navigationItems' >About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={10} duration={500} className='navigationItems' >Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={20} duration={500} className='navigationItems' >Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={20} duration={500} className='navigationItems' >Contact</Link>
                <p onClick={handleResume} className='navigationItems'>Resume</p>
            </div>
            <div className='menuBtnDiv'><i className='bx bx-menu-alt-right menuBtn' onClick={()=>setShowMenu(!showMenu)}></i></div>
            <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='listItems' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className='listItems' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={10} duration={500} className='listItems' onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={20} duration={500} className='listItems' onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={20} duration={500} className='listItems' onClick={()=>setShowMenu(false)}>Contact</Link>
                <p onClick={handleResume} className='listItems'>Resume</p>
            </div>
        </div>
    )
}

export default Navbar
