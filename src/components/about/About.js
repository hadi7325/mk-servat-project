import React from 'react'
import Nav from '../Nav'
import AboutContent from './about-component/AboutContent'
import Footer from "../footer/Footer"
import "./sass.scss"
import AboutDesc from './about-component/AboutDesc'
function About() {
  return (
    <>
    <Nav/>
    <section className='about-page'>
    <AboutContent/>
    <AboutDesc/>

    </section>
    <Footer/>
    </>
  )
}

export default About