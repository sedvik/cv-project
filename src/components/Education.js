import React from 'react'
import EducationDisplay from './EducationDisplay'
import EducationEdit from './EducationEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import uniqid from 'uniqid'
import '../styles/Education.css'

class Education extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: true,
      education: [
        {
          id: uniqid(),
          schoolName: '',
          titleOfStudy: '',
          startDate: '',
          endDate: ''
        }
      ]
    }
    this.setEditable = this.setEditable.bind(this)
    this.setToDisplay = this.setToDisplay.bind(this)
    this.addEducationEntry = this.addEducationEntry.bind(this)
    this.deleteEducationEntry = this.deleteEducationEntry.bind(this)
    this.updateEducationEntry = this.updateEducationEntry.bind(this)
  }

  setEditable () {
    this.setState({
      editable: true
    })
  }

  setToDisplay () {
    this.setState({
      editable: false
    })
  }

  addEducationEntry () {
    const newEducationEntry = {
      id: uniqid(),
      schoolName: '',
      titleOfStudy: '',
      startDate: '',
      endDate: ''
    }

    this.setState((prevState, props) => {
      const newEducation = [...prevState.education, newEducationEntry]
      return {
        education: newEducation
      }
    })
  }

  deleteEducationEntry (id) {
    this.setState((prevState, props) => {
      const newEducation = prevState.education.filter(entry => {
        return entry.id !== id
      })
      return {
        education: newEducation
      }
    })
  }

  updateEducationEntry (id, property, value) {
    this.setState((prevState, props) => {
      const updatedEducation = prevState.education.map(entry => {
        return (
          entry.id === id
            ? Object.assign({}, entry, { [property]: value })
            : entry
        )
      })
      return {
        education: updatedEducation
      }
    })
  }

  render () {
    const { editable, education } = this.state
    return (
      <div className="education-container">
        <h1>Education</h1>
        {editable
          ? <EducationEdit
              education={education}
              addEducationEntry={this.addEducationEntry}
              deleteEducationEntry={this.deleteEducationEntry}
              updateEducationEntry={this.updateEducationEntry}
            />
          : <EducationDisplay education={education} />
        }
        {editable
          ? <SubmitBtn setToDisplay={this.setToDisplay} />
          : <EditBtn setEditable={this.setEditable} />
        }
      </div>
    )
  }
}

export default Education
