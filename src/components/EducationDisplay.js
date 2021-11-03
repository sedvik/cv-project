import React from 'react'
import EducationDisplayEntry from './EducationDisplayEntry'
import '../styles/EducationDisplay.css'

class EducationDisplay extends React.Component {
  render () {
    const { education } = this.props

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
              return <EducationDisplayEntry key={i} educationEntry={entry} />
            })
          }
        </tbody>
      </table>
    )
  }
}

export default EducationDisplay
