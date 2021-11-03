import React from 'react'
import '../styles/ContactInfoEdit.css'

class ContactInfoEdit extends React.Component {
  constructor (props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
  }

  handleNameChange (e) {
    const newValue = e.target.value
    this.props.updateContactInfo('name', newValue)
  }

  handleEmailChange (e) {
    const newValue = e.target.value
    this.props.updateContactInfo('email', newValue)
  }

  handlePhoneChange (e) {
    const newValue = e.target.value
    this.props.updateContactInfo('phone', newValue)
  }

  render () {
    const { name, email, phone } = this.props.contactInfo

    return (
      <div className='contact-info-edit'>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          defaultValue={name}
          onChange={this.handleNameChange}
        />
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          defaultValue={email}
          onChange={this.handleEmailChange}
        />
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          type="tel"
          defaultValue={phone}
          onChange={this.handlePhoneChange}
        />
      </div>
    )
  }
}

export default ContactInfoEdit
