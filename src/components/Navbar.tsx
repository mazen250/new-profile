import React from 'react';
import "../styles/navbar.css";
import {Link} from 'react-router-dom';
import emailIcon from '../assets/mail-128.ico';
import home from '../assets/home-64.ico';

import work  from '../assets/document.png';
import cv from '../assets/cv3.png';
const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className="left">
            <div className="logo"><span>M</span>AZEN</div>
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
                    Works
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