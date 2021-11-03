import React from 'react'
import '../styles/ContactInfoDisplay.css'

class ContactInfoDisplay extends React.Component {
  render () {
    const { name, email, phone } = this.props.contactInfo

    return (
      <div className="contact-info-display">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    )
  }
}

export default ContactInfoDisplay
