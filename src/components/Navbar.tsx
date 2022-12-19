import React,{useEffect,useState} from 'react';
import "../styles/navbar.css";
import {Link} from 'react-router-dom';
import emailIcon from '../assets/mail-128.ico';
import home from '../assets/home-64.ico';

import work  from '../assets/document.png';
import cv from '../assets/cv3.png';



const Navbar = () => {

const [width, setWidth] = useState(window.innerWidth);
    //get screen width
useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
   
}, [])


    const [ show, setShow ] = useState(false);

   if(width<1300){
    return (
        <div className='mobileNav'>
            <div className="left">
                <Link to={"/"} className="logo"><span>M</span>AZEN</Link>
            </div>
            <div className="right">
                {show ? <button><i className="fa-solid fa-x icon"
                
                onClick={() => {
                      setShow(!show);
                }}
                ></i></button>: <button><i className="fa-solid fa-bars icon"
                
                onClick={() => {
                      setShow(!show);
                }}
                ></i></button>}
              
            </div>
            <div className="navlink" style={{display: show ? "block" : "none"}} >
                <div className="left" >
                <Link to={"/"} className="navlogo"><span>M</span>AZEN</Link>
                <div className="links">
                <div className="link">
                <img src={home} alt="home" />
                <Link to={"/"} onClick={
                    () => {
                        setShow(!show);
                    }
                }>Home</Link>
                </div>
                <div className="link">
                <img src={work} alt="home" />
                <Link to={"/works"} onClick={
                    () => {
                        setShow(!show);
                    }
                }>
                    Projects
                </Link>
                </div>
                <div className="link" >
                <img src={cv} alt="resume" />
                <a href="../assets/Mazen.pdf" download>Resume</a>
                </div>
                </div>
                </div>

            
            </div>
        </div>
    )
   }

  return (
    <div className='navbarContainer'>
        <div className="left">
            <Link to={"/"} className="logo"><span>M</span>AZEN</Link>
            <div className="email">
                <img src={emailIcon} alt="email icon" />
                <a href="mailto:mazenfayez56@gmail.com">
                Mazenfayez56@gmail.com
                </a>

            </div>
        </div>
        <div className="right">
            <div className="links">
                <div className="link">
                <img src={home} alt="home" />
                <Link to={"/"}>Home</Link>
                </div>
                <div className="link">
                <img src={work} alt="home" />
                <Link to={"/works"}>
                    Projects
                </Link>
                </div>
                <div className="link">
                <img src={cv} alt="resume" />
                <a href="../assets/Mazen.pdf" download>Resume</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar