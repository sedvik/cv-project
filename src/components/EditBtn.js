import React from 'react'

class EditBtn extends React.Component {
  render () {
    const { setEditable } = this.props

    return <button onClick={setEditable}>Edit</button>
  }
}

export default EditBtn
