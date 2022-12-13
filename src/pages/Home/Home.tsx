import React from 'react';
import './style/main.css';
import Main from './Components/Main';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
const Home = () => {
  return (
    <>
      <Main />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default Home