import React from 'react'

class SubmitBtn extends React.Component {
  render () {
    const { setToDisplay } = this.props

    return <button onClick={setToDisplay}>Submit</button>
  }
}

export default SubmitBtn
