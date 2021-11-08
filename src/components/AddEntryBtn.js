import React from 'react'
import '../styles/AddEntryBtn.css'

function AddEntryBtn (props) {
  return (
    <button
      className="add-entry"
      onClick={props.addEntry}
    >
      +
    </button>)
}

export default AddEntryBtn
