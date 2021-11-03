import React from 'react'
import '../styles/ContactInfoEdit.css'

class ContactInfoEdit extends React.Component {
  render () {
    const { name, email, phone } = this.props.contactInfo

    return (
      <div className='contact-info-edit'>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" defaultValue={name} />
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" defaultValue={email} />
        <label htmlFor="contact-phone">Phone Number</label>
        <input id="contact-phone" type="tel" defaultValue={phone} />
      </div>
    )
  }
}

export default ContactInfoEdit
