import React from 'react'
import ExperienceEditEntry from './ExperienceEditEntry'
import AddEntryBtn from './AddEntryBtn'
import '../styles/ExperienceEdit.css'

function ExperienceEdit (props) {
  const {
    experience,
    addExperienceEntry,
    deleteExperienceEntry,
    updateExperienceEntry,
    taskCallbacks
  } = props

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

export default ExperienceEdit
