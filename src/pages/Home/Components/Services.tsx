import React from 'react'
import '../style/services.css'
import { useEffect ,useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
  return (
    <div className='servContainer'>
       
            <div className='tit' data-aos="fade-right" >
                <h1><span>S</span>ervices</h1>
            </div>
            <div className="servCont">

            <div className="left">
                <div className="serv" 
                data-aos="fade-up"
                data-aos-duration="5000"
                data-aos-delay="300"
                >
                   
                    <h2> <i className="fas fa-laptop-code"></i>   <span>W</span>eb Development</h2>
                    <p>It's not about React,Angular or any other technologies for front end or backend! i will build the software you need to start your dream project from scratch,it is not about some text on screen! it's way more than that, so if you think you have the next generation idea? all you need is to get in touch with me</p>
                    </div>
                <div className="serv"
                 data-aos="fade-up"
                 data-aos-duration="5000"
                 data-aos-delay="300">
                    
                    <h2><i className="fas fa-mobile-alt"></i>   <span>M</span>obile Development</h2>
                    <p>Since Mobile Application is one of the best way to introduce your idea to the public, i can offer you building your Appllication, you propably will need two developers one for ios and the other for android, forget about that all you need is me building your App and run it on both platforms!  </p>
                </div>
                <div className="serv"
                 data-aos="fade-up"
                 data-aos-duration="5000"
                 data-aos-delay="300">
                   
                    <h2> <i className = "fas fa-database"></i>  <span>D</span>atabase</h2>
                        <p>It's always about database!
                        <br />
                        We always need to manage our data and keep it safe and well organized to be able to use it in the future, so i can offer you building your database and manage it for you, i can build it using SQL or NoSQL database, it's up to you!
                         </p>
                </div>
            </div>
            <div className="right"  data-aos="fade-left"
                
                data-aos-delay="300"></div>
          
        </div>
    </div>
  )
}

export default Services