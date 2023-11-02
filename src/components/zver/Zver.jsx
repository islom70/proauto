import React from 'react'
import classes from '../zver/Zver.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ZverOne from './zverone/ZverOne'

function Zver() {
  return (
    <div>
        <Header/>
        <ZverOne/>
        <Footer/>
    </div>
  )
}

export default Zver