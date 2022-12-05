import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="home">
        <div className="title">

        <h1><span style={{color:"orangered"}}>M</span>azen</h1>
       
        <h1 className='surname'>Alahwani</h1>
        </div>
        <div className="description">
          <h1>Full Stack Developer</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odit dolorum in dolore laborum magni officia, atque ipsam asperiores exercitationem hic explicabo dolor neque voluptas, rem soluta. Excepturi, laborum cumque!</p>
        </div>
        <div className="socialMedia">
          <a href="https://www.facebook.com/mazen.alahwani.7" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/mazen_alahwani/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/mazen-alahwani-5b1b1b1b9/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      
          <a href="https://www.github.com/mazenalahwani" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Home