import React from 'react'
import EducationEditEntry from './EducationEditEntry'
import AddEntryBtn from './AddEntryBtn'
import '../styles/EducationEdit.css'

function EducationEdit (props) {
  const {
    education,
    addEducationEntry,
    deleteEducationEntry,
    updateEducationEntry
  } = props

  return (
    <div className="education-edit-container">
      {
        education.map((entry) => {
          return (
            <EducationEditEntry
              key={entry.id}
              educationEntry={entry}
              deleteEducationEntry={deleteEducationEntry}
              updateEducationEntry={updateEducationEntry}
            />
          )
        })
      }
      <AddEntryBtn addEntry={addEducationEntry} />
    </div>
  )
}

export default EducationEdit
