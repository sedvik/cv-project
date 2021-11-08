import React from 'react'
import '../styles/EducationEditEntry.css'

function EducationEditEntry (props) {
  const {
    id,
    schoolName,
    titleOfStudy,
    startDate,
    endDate
  } = props.educationEntry

  function handleEntryUpdate (e) {
    const id = e.target.getAttribute('data-id')
    const property = e.target.getAttribute('data-property')
    const value = e.target.value
    props.updateEducationEntry(id, property, value)
  }

  function handleEntryDelete (e) {
    const id = e.target.getAttribute('data-id')
    props.deleteEducationEntry(id)
  }

  return (
    <div className="education-card">
        <button data-id={id} onClick={handleEntryDelete}>X</button>
        <label htmlFor={`school-${id}`}>School</label>
        <input
          id={`school-${id}`}
          type="text"
          defaultValue={schoolName}
          data-id={id}
          data-property="schoolName"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`title-${id}`}>Title of Study</label>
        <input
          id={`title-${id}`}
          type="text"
          defaultValue={titleOfStudy}
          data-id={id}
          data-property="titleOfStudy"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`edu-start-date-${id}`}>Start Date</label>
        <input
          id={`edu-start-date-${id}`}
          type="date"
          defaultValue={startDate}
          data-id={id}
          data-property="startDate"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`edu-end-date-${id}`}>End Date</label>
        <input
          id={`edu-end-date-${id}`}
          type="date"
          defaultValue={endDate}
          data-id={id}
          data-property="endDate"
          onChange={handleEntryUpdate}
        />
    </div>
  )
}

export default EducationEditEntry
