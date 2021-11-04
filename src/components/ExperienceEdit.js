import React from 'react'
import ExperienceEditEntry from './ExperienceEditEntry'
import AddEntryBtn from './AddEntryBtn'
import '../styles/ExperienceEdit.css'

class ExperienceEdit extends React.Component {
  render () {
    const {
      experience,
      addExperienceEntry,
      deleteExperienceEntry,
      updateExperienceEntry,
      taskCallbacks
    } = this.props

    return (
      <div className="experience-edit-container">
        {
          experience.map((entry) => {
            return (
              <ExperienceEditEntry
                key={entry.id}
                experienceEntry={entry}
                deleteExperienceEntry={deleteExperienceEntry}
                updateExperienceEntry={updateExperienceEntry}
                taskCallbacks={taskCallbacks}
              />
            )
          })
        }
        <AddEntryBtn addEntry={addExperienceEntry} />
      </div>
    )
  }
}

export default ExperienceEdit
