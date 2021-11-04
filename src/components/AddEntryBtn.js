import React from 'react'
import '../styles/AddEntryBtn.css'

class AddEntryBtn extends React.Component {
  render () {
    return (
      <button
        className="add-entry"
        onClick={this.props.addEntry}
      >
        +
      </button>)
  }
}

export default AddEntryBtn
