import React from 'react'
import '../styles/TasksDisplay.css'

class TasksDisplay extends React.Component {
  render () {
    const { tasks } = this.props

    return (
      <div className="tasks-display">
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.text}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default TasksDisplay
