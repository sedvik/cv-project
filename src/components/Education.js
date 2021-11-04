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
      // Determine index of education entry with the given id
      const i = prevState.education.findIndex(entry => {
        return entry.id === id
      })

      // Create copy of that entry and modify provided property with given value
      const updatedEntry = Object.assign({}, prevState.education[i])
      updatedEntry[property] = value

      // Create copy of rest of state.education minus the updated entry
      const updatedEducation = prevState.education.filter(entry => {
        return entry.id !== id
      })

      // Insert updated modified education entry into same position in state.education
      updatedEducation.splice(i, 0, updatedEntry)

      // Update state
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
