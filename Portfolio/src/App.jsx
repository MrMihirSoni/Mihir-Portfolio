import React from 'react';
import Navbar from './navbarComponent/Navbar';
import Intro from './introComponent/Intro';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>  
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
