import React from 'react'
import ContactInfoDisplay from './ContactInfoDisplay'
import ContactInfoEdit from './ContactInfoEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import '../styles/ContactInfo.css'

class ContactInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: true,
      contactInfo: {
        name: '',
        email: '',
        phone: ''
      }
    }
    this.setEditable = this.setEditable.bind(this)
    this.setToDisplay = this.setToDisplay.bind(this)
    this.updateContactInfo = this.updateContactInfo.bind(this)
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

  updateContactInfo (property, value) {
    this.setState((prevState, props) => {
      // Create copy of prevState contactInfo obj
      const contactInfo = Object.assign({}, prevState.contactInfo)

      // Update property to given value
      contactInfo[property] = value

      // Set new state
      return {
        contactInfo: contactInfo
      }
    })
  }

  render () {
    const { editable, contactInfo } = this.state

    return (
      <div className="contact-info-container">
        <h1>Contact Information</h1>
        {editable
          ? <ContactInfoEdit contactInfo={contactInfo} updateContactInfo={this.updateContactInfo} />
          : <ContactInfoDisplay contactInfo={contactInfo} />
        }
        {editable
          ? <SubmitBtn setToDisplay={this.setToDisplay} />
          : <EditBtn setEditable={this.setEditable} />
        }
      </div>
    )
  }
}

export default ContactInfo
