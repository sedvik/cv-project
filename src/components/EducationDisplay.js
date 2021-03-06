import React from 'react'
import EducationDisplayEntry from './EducationDisplayEntry'
import '../styles/EducationDisplay.css'

function EducationDisplay (props) {
  const { education } = props

  return (
    <table className="education-display">
      <thead>
        <tr>
          <th>School</th>
          <th>Title of Study</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {
          education.map((entry, i) => {
            return <EducationDisplayEntry key={entry.id} educationEntry={entry} />
          })
        }
      </tbody>
    </table>
  )
}

export default EducationDisplay
