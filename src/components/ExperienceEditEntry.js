import React from 'react'
import TasksEdit from './TasksEdit'
import '../styles/ExperienceEditEntry.css'

function ExperienceEditEntry (props) {
  const {
    id,
    companyName,
    position,
    tasks,
    startDate,
    endDate
  } = props.experienceEntry

  const { taskCallbacks } = props

  function handleEntryUpdate (e) {
    const id = e.target.getAttribute('data-id')
    const property = e.target.getAttribute('data-property')
    const value = e.target.value
    props.updateExperienceEntry(id, property, value)
  }

  function handleEntryDelete (e) {
    const id = e.target.getAttribute('data-id')
    props.deleteExperienceEntry(id)
  }

  return (
    <div className="experience-edit-entry">
      <button
        className="delete-btn"
        onClick={handleEntryDelete}
        data-id={id}
      >
        X
      </button>
      <div className="experience-entry-info">
        <label htmlFor={`company-${id}`}>Company Name</label>
        <input
          id={`company-${id}`}
          type="text"
          defaultValue={companyName}
          data-id={id}
          data-property="companyName"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`position-${id}`}>Position</label>
        <input
          id={`position-${id}`}
          type="text"
          defaultValue={position}
          data-id={id}
          data-property="position"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`exp-start-date-${id}`}>Start Date</label>
        <input
          id={`exp-start-date-${id}`}
          type="date"
          defaultValue={startDate}
          data-id={id}
          data-property="startDate"
          onChange={handleEntryUpdate}
        />
        <label htmlFor={`exp-end-date-${id}`}>End Date</label>
        <input
          id={`exp-end-date-${id}`}
          type="date"
          defaultValue={endDate}
          data-id={id}
          data-property="endDate"
          onChange={handleEntryUpdate}
        />
      </div>
      <TasksEdit
        entryId={id}
        tasks={tasks}
        taskCallbacks={taskCallbacks}
      />
    </div>
  )
}

export default ExperienceEditEntry
