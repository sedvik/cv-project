import React from 'react'

function EducationDisplayEntry (props) {
  const {
    schoolName,
    titleOfStudy,
    startDate,
    endDate
  } = props.educationEntry

  return (
    <tr>
      <td>{schoolName}</td>
      <td>{titleOfStudy}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
    </tr>
  )
}

export default EducationDisplayEntry
