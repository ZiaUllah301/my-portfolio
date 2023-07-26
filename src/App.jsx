import { useState } from 'react'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import NavBar from './components/NavBar'
import Contact from  './components/Contact'
import Experience from './components/Experience'

function App() {
  return (
    <>
     <NavBar/>
     <Home/>
     <About/>
    <Portfolio/>
    <SocialLinks/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
