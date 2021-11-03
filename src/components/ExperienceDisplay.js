import React from 'react'
import ExperienceDisplayEntry from './ExperienceDisplayEntry'
import '../styles/ExperienceDisplay.css'

class ExperienceDisplay extends React.Component {
  render () {
    const { experience } = this.props

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
}

export default ExperienceDisplay
