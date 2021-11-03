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
      {
        companyName: 'Edwards Lifesciences',
        position: 'Quality Engineer I',
        tasks: [
          'Perform IQ/OQ',
          'Troubleshoot equipment failures',
          'Process Validation'
        ],
        startDate: '2016-05-28',
        endDate: '2018-04-28'
      },
      {
        companyName: 'Stryker',
        position: 'Sr. Quality Engineer',
        tasks: [
          'Perform IQ/OQ',
          'Troubleshoot equipment failures',
          'Process Validation'
        ],
        startDate: '2020-03-31',
        endDate: '2021-04-21'
      }
    ]

    return (
      <div className="resume-container">
        <ContactInfo
          editable={true}
          contactInfo={contactInfo}
        />
        <hr />
        <Education
          editable={true}
          education={education}
        />
        <hr />
        <Experience
          editable={true}
          experience={experience}
        />
      </div>
    )
  }
}

export default App
