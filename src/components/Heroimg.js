import './heroimg.css'
import IntroImg from '../assets/19362653.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>HI, I'M JAYAPRAKASH B</p>
            <h1>FULL STACK STACK WEB DEVELOPER</h1>
            <Link to='/project' className='btn'>
            Projects
        </Link>
        <Link to='/contact' className='btn btn-light'>
            Contact
        </Link>
        </div>
    </div>
  )
}

export default Heroimg
