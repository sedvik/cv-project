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

    const education = [
      {
        schoolName: 'University of Utah',
        titleOfStudy: 'Chemical Engineering',
        startDate: '2012-08-21',
        endDate: '2016-05-10'
      },
      {
        schoolName: 'Granger High',
        titleOfStudy: 'General',
        startDate: '2009-08-28',
        endDate: '2012-05-21'
      }
    ]

    const experience = [
      {}
    ]

    return (
      <div className="resume-container">
        <ContactInfo
          editable={false}
          contactInfo={contactInfo}
        />
        <hr />
        <Education
          editable={false}
          education={education}
        />
        <hr />
        <Experience
          editable={false}
          experience={experience}
        />
      </div>
    )
  }
}

export default App
