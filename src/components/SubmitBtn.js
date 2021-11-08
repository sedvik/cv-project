import React from 'react'

function SubmitBtn (props) {
  const { setToDisplay } = props

  return <button onClick={setToDisplay}>Submit</button>
}

export default SubmitBtn
