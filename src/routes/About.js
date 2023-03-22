import React from 'react';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="Im a friendly Full-Stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
