import React from 'react'
import EducationEditEntry from './EducationEditEntry'
import AddEntryBtn from './AddEntryBtn'
import '../styles/EducationEdit.css'

class EducationEdit extends React.Component {
  render () {
    const {
      education,
      addEducationEntry,
      deleteEducationEntry,
      updateEducationEntry
    } = this.props

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
}

export default EducationEdit
