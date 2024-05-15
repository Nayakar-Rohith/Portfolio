import React from 'react'
import Header from '../components/Header'
import MainPage from './MainPage'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Contacts from './Contacts'
function Home() {
  return (
    <div className='bg-black'><Header/>
    <MainPage/>
    <About/>
    <Experience/>
    <Skills/>
    <Education/>
    <Contacts/>
    </div>
  )
}

export default Home
