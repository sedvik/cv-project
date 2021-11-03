import React from 'react'
import TasksDisplay from './TasksDisplay'
import '../styles/ExperienceDisplayEntry.css'

class ExperienceDisplayEntry extends React.Component {
  render () {
    const {
      companyName,
      position,
      tasks,
      startDate,
      endDate
    } = this.props.experienceEntry

    return (
      <div className="experience-display-entry-container">
        <div className="company-date-container">
          <p className="bold">{companyName}</p>
          <p>
            <i>{`${startDate}`}</i> <span className="large">-</span> <i>{`${endDate}`}</i>
          </p>
        </div>
        <h2>{position}</h2>
        <TasksDisplay tasks={tasks} />
      </div>
    )
  }
}

export default ExperienceDisplayEntry
