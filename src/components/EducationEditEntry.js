import React from 'react'
import '../styles/EducationEditEntry.css'

class EducationEditEntry extends React.Component {
  render () {
    const entryNum = this.props.entryNum
    const {
      schoolName,
      titleOfStudy,
      startDate,
      endDate
    } = this.props.educationEntry

    return (
      <div className="education-card">
          <button>X</button>
          <label htmlFor={`school-${entryNum}`}>School</label>
          <input id={`school-${entryNum}`} type="text" defaultValue={schoolName} />
          <label htmlFor={`title-${entryNum}`}>Title of Study</label>
          <input id={`title-${entryNum}`} type="text" defaultValue={titleOfStudy} />
          <label htmlFor={`start-date-${entryNum}`}>Start Date</label>
          <input id={`start-date-${entryNum}`} type="date" defaultValue={startDate} />
          <label htmlFor={`end-date-${entryNum}`}>End Date</label>
          <input id={`end-date-${entryNum}`} type="date" defaultValue={endDate} />
      </div>
    )
  }
}

export default EducationEditEntry
