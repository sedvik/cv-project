import React from 'react'
import TasksEdit from './TasksEdit'
import '../styles/ExperienceEditEntry.css'

class ExperienceEditEntry extends React.Component {
  render () {
    const entryNum = this.props.entryNum
    const {
      companyName,
      position,
      tasks,
      startDate,
      endDate
    } = this.props.experienceEntry

    return (
      <div className="experience-edit-entry">
        <button className="delete-btn">X</button>
        <div className="experience-entry-info">
          <label htmlFor={`company-${entryNum}`}>Company Name</label>
          <input id={`company-${entryNum}`} type="text" defaultValue={companyName} />
          <label htmlFor={`position-${entryNum}`}>Position</label>
          <input id={`position-${entryNum}`} type="text" defaultValue={position} />
          <label htmlFor={`exp-start-date-${entryNum}`}>Start Date</label>
          <input id={`exp-start-date-${entryNum}`} type="date" defaultValue={startDate} />
          <label htmlFor={`exp-end-date-${entryNum}`}>End Date</label>
          <input id={`exp-end-date-${entryNum}`} type="date" defaultValue={endDate} />
        </div>
        <TasksEdit tasks={tasks} />
      </div>
    )
  }
}

export default ExperienceEditEntry
