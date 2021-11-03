import React from 'react'
import '../styles/EditableTask.css'

class EditableTask extends React.Component {
  render () {
    const { task, entryNum } = this.props

    return (
      <div className="editable-task">
        <p className="task-number">{entryNum})</p>
        <input type="text" defaultValue={task} />
        <button className="del-btn">X</button>
      </div>
    )
  }
}

export default EditableTask
