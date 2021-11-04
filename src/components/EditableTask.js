import React from 'react'
import '../styles/EditableTask.css'

class EditableTask extends React.Component {
  constructor (props) {
    super(props)
    this.handleTaskEdit = this.handleTaskEdit.bind(this)
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
  }

  handleTaskEdit (e) {
    const entryId = e.target.getAttribute('data-entryid')
    const taskId = e.target.getAttribute('data-taskid')
    const value = e.target.value
    this.props.updateTaskEntry(entryId, taskId, value)
  }

  handleTaskDelete (e) {
    const entryId = e.target.getAttribute('data-entryid')
    const taskId = e.target.getAttribute('data-taskid')
    this.props.deleteTaskEntry(entryId, taskId)
  }

  render () {
    const {
      task,
      entryId,
      taskId,
      entryNum
    } = this.props

    return (
      <div className="editable-task">
        <p className="task-number">{entryNum})</p>
        <input
          type="text"
          defaultValue={task.text}
          data-entryid={entryId}
          data-taskid={taskId}
          onChange={this.handleTaskEdit}
        />
        <button
          className="del-btn"
          data-entryid={entryId}
          data-taskid={taskId}
          onClick={this.handleTaskDelete}
        >
          X
        </button>
      </div>
    )
  }
}

export default EditableTask
