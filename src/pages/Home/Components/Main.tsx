
import '../style/main.css';
import Typed from 'react-typed';
import { useEffect ,useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Main = () => {
  useEffect(() => {
  AOS.init();
  AOS.refresh();
}, [])
  return (
    <div className='homeContainer'>
      <div className="home">
        <div className="title"  >
        <p className="hello"  data-aos="fade-zoom-in" data-aos-duration="5000">Hello There!</p>
        <h1><span style={{color:"orangered"}}>M</span>azen</h1>
       
        <h1 className='surname'>Alahwani</h1>
        </div>
        <div className="description">
          {/* <h1>Full Stack Developer</h1> */}
            <Typed
                className="typedtext"
                strings={["Software Developer", "Full Stack Developer", "Mobile Developer","Software Developer"]}
                typeSpeed={40}
                backSpeed={20}
                style={{color:"white"}}
            />
          <p>“Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.” - Grace Hopper</p>
        </div>
        <div className="socialMedia"  data-aos="fade-right" data-aos-duration="2000">
          <a href="mailto:mazenfayez56@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://wa.me/+201005785550" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/mazen-alahwani-31b693152/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      
          <a href="https://github.com/mazen250" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  )
};

export default Main