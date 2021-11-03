import React from 'react'
import ExperienceDisplay from './ExperienceDisplay'
import ExperienceEdit from './ExperienceEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import '../styles/Experience.css'

class Experience extends React.Component {
  render () {
    const { editable, experience } = this.props

    return (
      <div className="experience-container">
        <h1>Experience</h1>
        {editable
          ? <ExperienceEdit experience={experience} />
          : <ExperienceDisplay experience={experience} />
        }
        {editable
          ? <SubmitBtn />
          : <EditBtn />
        }
      </div>
    )
  }
}

export default Experience
