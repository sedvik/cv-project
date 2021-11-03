import React from 'react'
import EducationDisplay from './EducationDisplay'
import EducationEdit from './EducationEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import '../styles/Education.css'

class Education extends React.Component {
  render () {
    const { editable, education } = this.props
    return (
      <div className="education-container">
        <h1>Education</h1>
        {editable
          ? <EducationEdit education={education} />
          : <EducationDisplay education={education} />
        }
        {editable
          ? <SubmitBtn />
          : <EditBtn />
        }
      </div>
    )
  }
}

export default Education
