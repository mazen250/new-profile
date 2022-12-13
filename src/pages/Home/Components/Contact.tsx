import React from 'react'
import '../style/contact.css'
const Contact = () => {
  return (
    <div className='contactContainer'>
        <div className='contact'>
            <h1>Stay Connected!</h1>
            <a href="mailto:mazenfayez56@gmail.com">
                Mazenfayez56@gmail.com
            </a>
            <div className="links">
      <a href="https://wa.me/+201005785550" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/mazen-alahwani-5b1b1b1b9/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      
            </div>
            <div className="copyright">
                <p>© 2022 Mazen Alahwani</p>
            </div>
        </div>
    </div>
  )
}

export default Contact