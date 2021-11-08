import React from 'react'
import ContactInfo from './components/ContactInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles/App.css'

function App () {
  return (
    <div className="resume-container">
      <ContactInfo />
      <hr />
      <Education />
      <hr />
      <Experience />
    </div>
  )
}

export default App
