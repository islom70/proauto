import React from 'react'
import classes from '../katalok/Jurnal.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import JurOne from './jurone/JurOne'

function Jurnal() {
  return (
    <div>
        <Header/>
        <JurOne/>
        <Footer/>
    </div>
  )
}

export default Jurnal