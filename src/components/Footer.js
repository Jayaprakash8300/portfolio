import './footer.css';
import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={30} style={{color:"#fff", marginRight:"2rem"}} />
                <div>
                    <p>6/2, Marapalam 7th Street, KAS Nagar, Karungapalayam, Erode-3</p>
                    <p>Tamilnadu</p>
                </div>
            </div>
            <div className='phone'>
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
            9677904999</h4>
            </div>
            <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
            jayaprakash8300@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
                <h4>About</h4>
                <p>This is me Jayaprakash B , Full Stack Developer</p>
                <div className='social'>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"rem"}} />
                </div>
                <p>Copy Right : "Image by upklyak on Freepik"</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
