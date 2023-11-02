import React from 'react'
import classes from '../main/Main.module.css'
import Header from '../header/Header'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'
import SecFive from './secfive/SecFive'
import SecSix from './secsix/SecSix'
import Footer from '../footer/Footer'

function Main() {
  return (
    <div>
      <Header/>
      <SecOne/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <SecFive/>
      <SecSix/>
      <Footer/>
    </div>
  )
}

export default Main