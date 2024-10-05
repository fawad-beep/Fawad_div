import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AllDocters } from './pages/AllDocters'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Navbar } from './components/navba/Navbar'
import { Footer } from './components/footer/Footer'

import { Loginpage } from './pages/Loginpage'
import { Details } from './pages/Details'


export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alldocters' element={<AllDocters/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loginpage' element={<Loginpage/>}/>
        <Route path='/Details' element={<Details/>}/>
      </Routes>
    <Footer/>
      </BrowserRouter>

    </div>
  )
}
