import React from 'react'
import '../style/services.css'
const Services = () => {
  return (
    <div className='servContainer'>
       
            <div className='tit'>
                <h1><span>S</span>ervices</h1>
            </div>
            <div className="servCont">

            <div className="left">
                <div className="serv">
                   
                    <h2> <i className="fas fa-laptop-code"></i>   <span>W</span>eb Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit praesentium eum rerum debitis doloribus quos sequi numquam! Illum maxime totam necessitatibus iusto laudantium deleniti maiores culpa eligendi numquam tempore?</p>
                    </div>
                <div className="serv">
                    
                    <h2><i className="fas fa-mobile-alt"></i>   <span>M</span>obile Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit vero omnis quidem expedita exercitationem voluptatem? Quisquam accusamus quam, facere at ad maiores nobis nisi dolorem commodi illum laudantium beatae!</p>
                </div>
                <div className="serv">
                   
                    <h2> <i className = "fas fa-database"></i>  <span>D</span>atabase</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod nihil modi fugiat iure sapiente repellendus ex officiis neque, voluptatem ad natus quos accusamus consequatur laudantium magnam iusto repudiandae quam!</p>
                </div>
            </div>
            <div className="right"></div>
          
        </div>
    </div>
  )
}

export default Services