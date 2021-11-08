import React, { useState } from 'react'
import EducationDisplay from './EducationDisplay'
import EducationEdit from './EducationEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import uniqid from 'uniqid'
import '../styles/Education.css'

function Education (props) {
  const [editable, setEditable] = useState(true)
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: ''
    }
  ])

  function setToEditable () {
    setEditable(true)
  }

  function setToDisplay () {
    setEditable(false)
  }

  function addEducationEntry () {
    const newEducationEntry = {
      id: uniqid(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: ''
    }

    setEducation([...education, newEducationEntry])
  }

  function deleteEducationEntry (id) {
    const newEducation = education.filter(entry => {
      return entry.id !== id
    })

    setEducation(newEducation)
  }

  function updateEducationEntry (id, property, value) {
    const updatedEducation = education.map(entry => {
      return (
        entry.id === id
          ? Object.assign({}, entry, { [property]: value })
          : entry
      )
    })

    setEducation(updatedEducation)
  }

  return (
    <div className="education-container">
      <h1>Education</h1>
      {editable
        ? <EducationEdit
            education={education}
            addEducationEntry={addEducationEntry}
            deleteEducationEntry={deleteEducationEntry}
            updateEducationEntry={updateEducationEntry}
          />
        : <EducationDisplay education={education} />
      }
      {editable
        ? <SubmitBtn setToDisplay={setToDisplay} />
        : <EditBtn setEditable={setToEditable} />
      }
    </div>
  )
}

export default Education
