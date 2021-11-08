import React from 'react'
import EditableTask from './EditableTask'
import '../styles/TasksEdit.css'

function TasksEdit (props) {
  const {
    entryId,
    tasks,
    taskCallbacks
  } = props

  const {
    deleteTaskEntry,
    updateTaskEntry
  } = taskCallbacks

  function handleButtonClick (e) {
    const id = e.target.getAttribute('data-entryid')
    props.taskCallbacks.addTaskEntry(id)
  }

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
        onClick={handleButtonClick}
      >
        Add Task
      </button>
    </div>
  )
}

export default TasksEdit
