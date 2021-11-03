import React from 'react'

class EducationDisplayEntry extends React.Component {
  render () {
    const {
      schoolName,
      titleOfStudy,
      startDate,
      endDate
    } = this.props.educationEntry

    return (
      <tr>
        <td>{schoolName}</td>
        <td>{titleOfStudy}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
      </tr>
    )
  }
}

export default EducationDisplayEntry
