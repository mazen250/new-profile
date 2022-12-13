import React from 'react'
import '../styles/main.css'
const Main = () => {
  return (
    <div className='aboutContainer'>
        <div className="leftAbout">
            <div className="text">
            <h1><span>A</span>bout Me</h1>
            <a href="../../../assets/Mazen.pdf" download>Download Resume</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut similique harum officia dolorem atque minus rem quae nihil eius optio quod aperiam hic, tempore earum ea molestias quasi quibusdam? Optio ex repellat quas eum rerum ab architecto suscipit. Quo impedit iure error quis tenetur sequi obcaecati illo ut aut eligendi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dignissimos quod sequi odit quia culpa officiis placeat nostrum soluta porro, pariatur eveniet fugiat minima sint dicta enim facilis labore.</p>
            </div>
          
        </div>
        <div className="rightAbout"></div>
    </div>
  )
}

export default Main