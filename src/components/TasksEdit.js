import React from 'react'
import EditableTask from './EditableTask'
import '../styles/TasksEdit.css'

class TasksEdit extends React.Component {
  render () {
    const { tasks } = this.props

    return (
      <div className="tasks-edit-container">
        <h2>Tasks</h2>
        <div className="editable-tasks-container">
          {
            tasks.map((task, i) => {
              return <EditableTask key={i} task={task} entryNum={i + 1} />
            })
          }
        </div>
        <button className="add-task">Add Task</button>
      </div>
    )
  }
}

export default TasksEdit
