import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Heroimg from '../components/Heroimg'
import Navbar from '../components/Navbar'
import Work from '../components/Work'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <AboutContent />
      <h4 style={{textAlign:"center"}}>Contact Me</h4>
      <Form />
      <Footer />
    </div>
  )
}

export default Home
