import React from 'react'
import '../styles/TasksDisplay.css'

function TasksDisplay (props) {
  const { tasks } = props

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

export default TasksDisplay
