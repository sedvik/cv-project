import React from 'react'
import EditableTask from './EditableTask'
import '../styles/TasksEdit.css'

class TasksEdit extends React.Component {
  constructor (props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick (e) {
    const id = e.target.getAttribute('data-entryid')
    this.props.taskCallbacks.addTaskEntry(id)
  }

  render () {
    const {
      entryId,
      tasks,
      taskCallbacks
    } = this.props

    const {
      deleteTaskEntry,
      updateTaskEntry
    } = taskCallbacks

    return (
      <div className="tasks-edit-container">
        <h2>Tasks</h2>
        <div className="editable-tasks-container">
          {
            tasks.map((task, i) => {
              return (
                <EditableTask
                  key={task.id}
                  task={task}
                  entryId={entryId}
                  taskId={task.id}
                  entryNum={i + 1}
                  deleteTaskEntry={deleteTaskEntry}
                  updateTaskEntry={updateTaskEntry}
                />
              )
            })
          }
        </div>
        <button
          className="add-task"
          data-entryid={entryId}
          onClick={this.handleButtonClick}
        >
          Add Task
        </button>
      </div>
    )
  }
}

export default TasksEdit
