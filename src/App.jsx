import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import React from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {

  return (

    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route index element = {<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
