import React from 'react'
import ExperienceDisplayEntry from './ExperienceDisplayEntry'
import '../styles/ExperienceDisplay.css'

function ExperienceDisplay (props) {
  const { experience } = props

  return (
    <div className="experience-display-container">
      {
        experience.map((entry, i) => {
          return <ExperienceDisplayEntry key={i} experienceEntry={entry} />
        })
      }
    </div>
  )
}

export default ExperienceDisplay
