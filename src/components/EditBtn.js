import React from 'react'

function EditBtn (props) {
  const { setEditable } = props

  return <button onClick={setEditable}>Edit</button>
}

export default EditBtn
