import React from 'react'
import ExperienceEditEntry from './ExperienceEditEntry'
import AddEntryBtn from './AddEntryBtn'
import '../styles/ExperienceEdit.css'

class ExperienceEdit extends React.Component {
  render () {
    const { experience } = this.props

    return (
      <div className="experience-edit-container">
        {
          experience.map((entry, i) => {
            return <ExperienceEditEntry key={i} entryNum={i} experienceEntry={entry} />
          })
        }
        <AddEntryBtn />
      </div>
    )
  }
}

export default ExperienceEdit
