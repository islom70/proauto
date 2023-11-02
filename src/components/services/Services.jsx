import React from 'react'
import classes from '../services/Services.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import SerOne from './serone/SerOne'

function Services() {
  return (
    <div>
        <Header/>
        <SerOne/>
        <Footer/>
    </div>
  )
}

export default Services