import React from 'react'
import EducationEditEntry from './EducationEditEntry'
import '../styles/EducationEdit.css'

class EducationEdit extends React.Component {
  render () {
    const { education } = this.props

    return (
      <div className="education-edit-container">
        {
          education.map((entry, i) => {
            return (
              <EducationEditEntry
                key={i}
                entryNum={i}
                educationEntry={entry}
              />
            )
          })
        }
      </div>
    )
  }
}

export default EducationEdit
