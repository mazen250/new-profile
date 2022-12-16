import React,{useEffect} from 'react'
import '../styles/main.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
useEffect(() => {
  AOS.init();
  AOS.refresh();
}, [])
  return (
    <div className='aboutContainer'>
        <div className="leftAbout">
            <div className="text">
            <h1  data-aos="fade-right" data-aos-duration="5000"><span>A</span>bout Me</h1>
            <a href="../../../assets/Mazen.pdf" download  data-aos="fade-right" data-aos-duration="5000">Download Resume</a>
            <p  data-aos="fade-right" data-aos-duration="5000">Hello there,
            <br />
            this is Mazen Alahwani, i am a software Engineer based in Cairo,Egypt , i've graduated from Cairo University in 2022, but this is not how it started, development has always been my passion, creating new and complex software is my thing!
            </p>
            
            <p  data-aos="fade-right" data-aos-duration="5000">couple of years ago in the second year's summer i started learning web development, then react as a framework,express,SQL and NOSQL database , Now i am working to adapt my react skills to react native. </p>
            </div>
          
        </div>
        <div className="rightAbout"  data-aos="fade-left" data-aos-duration="5000"></div>
    </div>
  )
}

export default Main