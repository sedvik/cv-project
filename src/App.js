import React from 'react'
import ContactInfo from './components/ContactInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles/App.css'

class App extends React.Component {
  render () {
    const contactInfo = {
      name: 'Karl Dublin',
      email: 'karl.dublin@yorkshirepudding.com',
      phone: '555-555-5555'
    }

    return (
      <div className="resume-container">
        <ContactInfo
          editable={true}
          contactInfo={contactInfo}
        />
        <hr />
        <Education editable={false} />
        <hr />
        <Experience editable={false} />
      </div>
    )
  }
}

export default App
