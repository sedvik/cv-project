import React from 'react'
import '../styles/EducationEditEntry.css'

class EducationEditEntry extends React.Component {
  constructor (props) {
    super(props)
    this.handleEntryUpdate = this.handleEntryUpdate.bind(this)
    this.handleEntryDelete = this.handleEntryDelete.bind(this)
  }

  handleEntryUpdate (e) {
    const id = e.target.getAttribute('data-id')
    const property = e.target.getAttribute('data-property')
    const value = e.target.value
    this.props.updateEducationEntry(id, property, value)
  }

  handleEntryDelete (e) {
    const id = e.target.getAttribute('data-id')
    this.props.deleteEducationEntry(id)
  }

  render () {
    const {
      id,
      schoolName,
      titleOfStudy,
      startDate,
      endDate
    } = this.props.educationEntry

    return (
      <div className="education-card">
          <button data-id={id} onClick={this.handleEntryDelete}>X</button>
          <label htmlFor={`school-${id}`}>School</label>
          <input
            id={`school-${id}`}
            type="text"
            defaultValue={schoolName}
            data-id={id}
            data-property="schoolName"
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`title-${id}`}>Title of Study</label>
          <input
            id={`title-${id}`}
            type="text"
            defaultValue={titleOfStudy}
            data-id={id}
            data-property="titleOfStudy"
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`edu-start-date-${id}`}>Start Date</label>
          <input
            id={`edu-start-date-${id}`}
            type="date"
            defaultValue={startDate}
            data-id={id}
            data-property="startDate"
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`edu-end-date-${id}`}>End Date</label>
          <input
            id={`edu-end-date-${id}`}
            type="date"
            defaultValue={endDate}
            data-id={id}
            data-property="endDate"
            onChange={this.handleEntryUpdate}
          />
      </div>
    )
  }
}

export default EducationEditEntry
