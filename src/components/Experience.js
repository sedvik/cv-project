import React, { useState } from 'react'
import ExperienceDisplay from './ExperienceDisplay'
import ExperienceEdit from './ExperienceEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import uniqid from 'uniqid'
import '../styles/Experience.css'

function Experience (props) {
  const [editable, setEditable] = useState(true)
  const [experience, setExperience] = useState([
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
  ])

  function setToEditable () {
    setEditable(true)
  }

  function setToDisplay () {
    setEditable(false)
  }

  function addExperienceEntry () {
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

    const newExperience = [...experience, newExperienceEntry]
    setExperience(newExperience)
  }

  function deleteExperienceEntry (id) {
    const updatedExperience = experience.filter(entry => {
      return entry.id !== id
    })
    setExperience(updatedExperience)
  }

  function updateExperienceEntry (id, property, value) {
    const updatedExperience = experience.map(entry => {
      return (
        entry.id === id
          ? Object.assign({}, entry, { [property]: value })
          : entry
      )
    })
    setExperience(updatedExperience)
  }

  function addTaskEntry (entryId) {
    const newTask = {
      id: uniqid(),
      text: ''
    }

    const newExperience = experience.map(entry => {
      const newTasks = [...entry.tasks, newTask]
      return (
        entry.id === entryId
          ? Object.assign({}, entry, { tasks: newTasks })
          : entry
      )
    })

    setExperience(newExperience)
  }

  function deleteTaskEntry (entryId, taskId) {
    const newExperience = experience.map(entry => {
      if (entry.id === entryId) {
        const newTasks = entry.tasks.filter(task => {
          return task.id !== taskId
        })
        return Object.assign({}, entry, { tasks: newTasks })
      } else {
        return entry
      }
    })

    setExperience(newExperience)
  }

  function updateTaskEntry (entryId, taskId, value) {
    const newExperience = experience.map(entry => {
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

    setExperience(newExperience)
  }

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      {editable
        ? <ExperienceEdit
            experience={experience}
            addExperienceEntry={addExperienceEntry}
            deleteExperienceEntry={deleteExperienceEntry}
            updateExperienceEntry={updateExperienceEntry}
            taskCallbacks={
              {
                addTaskEntry: addTaskEntry,
                deleteTaskEntry: deleteTaskEntry,
                updateTaskEntry: updateTaskEntry
              }
            }
          />
        : <ExperienceDisplay experience={experience} />
      }
      {editable
        ? <SubmitBtn setToDisplay={setToDisplay} />
        : <EditBtn setEditable={setToEditable} />
      }
    </div>
  )
}

export default Experience
