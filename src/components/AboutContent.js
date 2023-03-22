import './about.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Full from '../assets/MERN-Full-Stack-Development.jpg';
import full from '../assets/full-stack-web-developer-1024x1024.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>Im a Full Stack Web Developer with MERN Stack. I create responsive websites for our clients</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={Full} className="img" alt="img"/>
            </div>
            <div className='img-stack bottom'>
                <img src={full} className="img" alt="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
