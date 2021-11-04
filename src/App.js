import React from 'react'
import ContactInfo from './components/ContactInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles/App.css'

class App extends React.Component {
  render () {
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
}

export default App
