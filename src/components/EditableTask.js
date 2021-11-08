import React from 'react'
import '../styles/EditableTask.css'

function EditableTask (props) {
  const {
    task,
    entryId,
    taskId,
    entryNum
  } = props

  function handleTaskEdit (e) {
    const entryId = e.target.getAttribute('data-entryid')
    const taskId = e.target.getAttribute('data-taskid')
    const value = e.target.value
    props.updateTaskEntry(entryId, taskId, value)
  }

  function handleTaskDelete (e) {
    const entryId = e.target.getAttribute('data-entryid')
    const taskId = e.target.getAttribute('data-taskid')
    props.deleteTaskEntry(entryId, taskId)
  }

  return (
    <div className="editable-task">
      <p className="task-number">{entryNum})</p>
      <input
        type="text"
        defaultValue={task.text}
        data-entryid={entryId}
        data-taskid={taskId}
        onChange={handleTaskEdit}
      />
      <button
        className="del-btn"
        data-entryid={entryId}
        data-taskid={taskId}
        onClick={handleTaskDelete}
      >
        X
      </button>
    </div>
  )
}

export default EditableTask
