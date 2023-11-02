import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/Main'
import Jurnal from './components/katalok/Jurnal'
import Services from './components/services/Services'
import Magnum from './components/magnum/Magnum'
import Zver from './components/zver/Zver'

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/catalog' element={<Jurnal/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/magnum' element={<Magnum/>}/>
          <Route path='/zver' element={<Zver/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App