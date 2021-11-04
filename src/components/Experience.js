import React from 'react'
import ExperienceDisplay from './ExperienceDisplay'
import ExperienceEdit from './ExperienceEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import uniqid from 'uniqid'
import '../styles/Experience.css'

class Experience extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: true,
      experience: [
        {
          id: uniqid(),
          companyName: '',
          position: '',
          tasks: [
            {
              id: uniqid(),
              text: ''
            }
          ],
          startDate: '',
          endDate: ''
        }
      ]
    }
    this.setEditable = this.setEditable.bind(this)
    this.setToDisplay = this.setToDisplay.bind(this)
    this.addExperienceEntry = this.addExperienceEntry.bind(this)
    this.deleteExperienceEntry = this.deleteExperienceEntry.bind(this)
    this.updateExperienceEntry = this.updateExperienceEntry.bind(this)
    this.addTaskEntry = this.addTaskEntry.bind(this)
    this.deleteTaskEntry = this.deleteTaskEntry.bind(this)
    this.updateTaskEntry = this.updateTaskEntry.bind(this)
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

  addExperienceEntry () {
    const newExperienceEntry = {
      id: uniqid(),
      companyName: '',
      position: '',
      tasks: [
        {
          id: uniqid(),
          text: ''
        }
      ],
      startDate: '',
      endDate: ''
    }

    this.setState((prevState, props) => {
      const newExperience = [...prevState.experience, newExperienceEntry]
      return {
        experience: newExperience
      }
    })
  }

  deleteExperienceEntry (id) {
    this.setState((prevState, props) => {
      const updatedExperience = prevState.experience.filter(entry => {
        return entry.id !== id
      })
      return {
        experience: updatedExperience
      }
    })
  }

  updateExperienceEntry (id, property, value) {
    this.setState((prevState, props) => {
      const updatedExperience = prevState.experience.map(entry => {
        return (
          entry.id === id
            ? Object.assign({}, entry, { [property]: value })
            : entry
        )
      })

      return {
        experience: updatedExperience
      }
    })
  }

  addTaskEntry (entryId) {
    const newTask = {
      id: uniqid(),
      text: ''
    }

    this.setState((prevState, props) => {
      const newExperience = prevState.experience.map(entry => {
        const newTasks = [...entry.tasks, newTask]
        return (
          entry.id === entryId
            ? Object.assign({}, entry, { tasks: newTasks })
            : entry
        )
      })

      return {
        experience: newExperience
      }
    })
  }

  deleteTaskEntry (entryId, taskId) {
    this.setState((prevState, props) => {
      const newExperience = prevState.experience.map(entry => {
        if (entry.id === entryId) {
          const newTasks = entry.tasks.filter(task => {
            return task.id !== taskId
          })
          return Object.assign({}, entry, { tasks: newTasks })
        } else {
          return entry
        }
      })
      return {
        experience: newExperience
      }
    })
  }

  updateTaskEntry (entryId, taskId, value) {
    this.setState((prevState, props) => {
      const newExperience = prevState.experience.map(entry => {
        if (entry.id === entryId) {
          const newTasks = entry.tasks.map(task => {
            return (
              task.id === taskId
                ? Object.assign({}, task, { text: value })
                : task
            )
          })
          return Object.assign({}, entry, { tasks: newTasks })
        } else {
          return entry
        }
      })
      return {
        experience: newExperience
      }
    })
  }

  render () {
    const { editable, experience } = this.state

    return (
      <div className="experience-container">
        <h1>Experience</h1>
        {editable
          ? <ExperienceEdit
              experience={experience}
              addExperienceEntry={this.addExperienceEntry}
              deleteExperienceEntry={this.deleteExperienceEntry}
              updateExperienceEntry={this.updateExperienceEntry}
              taskCallbacks={
                {
                  addTaskEntry: this.addTaskEntry,
                  deleteTaskEntry: this.deleteTaskEntry,
                  updateTaskEntry: this.updateTaskEntry
                }
              }
            />
          : <ExperienceDisplay experience={experience} />
        }
        {editable
          ? <SubmitBtn setToDisplay={this.setToDisplay} />
          : <EditBtn setEditable={this.setEditable} />
        }
      </div>
    )
  }
}

export default Experience
