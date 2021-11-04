import React from 'react'
import TasksEdit from './TasksEdit'
import '../styles/ExperienceEditEntry.css'

class ExperienceEditEntry extends React.Component {
  constructor (props) {
    super(props)
    this.handleEntryUpdate = this.handleEntryUpdate.bind(this)
    this.handleEntryDelete = this.handleEntryDelete.bind(this)
  }

  handleEntryUpdate (e) {
    const id = e.target.getAttribute('data-id')
    const property = e.target.getAttribute('data-property')
    const value = e.target.value
    this.props.updateExperienceEntry(id, property, value)
  }

  handleEntryDelete (e) {
    const id = e.target.getAttribute('data-id')
    this.props.deleteExperienceEntry(id)
  }

  render () {
    const {
      id,
      companyName,
      position,
      tasks,
      startDate,
      endDate
    } = this.props.experienceEntry

    const { taskCallbacks } = this.props

    return (
      <div className="experience-edit-entry">
        <button
          className="delete-btn"
          onClick={this.handleEntryDelete}
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
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`position-${id}`}>Position</label>
          <input
            id={`position-${id}`}
            type="text"
            defaultValue={position}
            data-id={id}
            data-property="position"
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`exp-start-date-${id}`}>Start Date</label>
          <input
            id={`exp-start-date-${id}`}
            type="date"
            defaultValue={startDate}
            data-id={id}
            data-property="startDate"
            onChange={this.handleEntryUpdate}
          />
          <label htmlFor={`exp-end-date-${id}`}>End Date</label>
          <input
            id={`exp-end-date-${id}`}
            type="date"
            defaultValue={endDate}
            data-id={id}
            data-property="endDate"
            onChange={this.handleEntryUpdate}
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
}

export default ExperienceEditEntry
