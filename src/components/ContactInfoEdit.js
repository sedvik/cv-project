import React from 'react'
import '../styles/ContactInfoEdit.css'

function ContactInfoEdit (props) {
  const { name, email, phone } = props.contactInfo

  function handleNameChange (e) {
    const newValue = e.target.value
    props.updateContactInfo('name', newValue)
  }

  function handleEmailChange (e) {
    const newValue = e.target.value
    props.updateContactInfo('email', newValue)
  }

  function handlePhoneChange (e) {
    const newValue = e.target.value
    props.updateContactInfo('phone', newValue)
  }

  return (
    <div className='contact-info-edit'>
      <label htmlFor="contact-name">Name</label>
      <input
        id="contact-name"
        type="text"
        defaultValue={name}
        onChange={handleNameChange}
      />
      <label htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        type="email"
        defaultValue={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="contact-phone">Phone Number</label>
      <input
        id="contact-phone"
        type="tel"
        defaultValue={phone}
        onChange={handlePhoneChange}
      />
    </div>
  )
}

export default ContactInfoEdit
