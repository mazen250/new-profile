import React from 'react';
import './style/main.css';
import Main from './Components/Main';
import Services from './Components/Services';
import Projects from './Components/Projects';
const Home = () => {
  return (
    <>
      <Main />
      <Services />
      <Projects />
    </>
  )
}

export default Home