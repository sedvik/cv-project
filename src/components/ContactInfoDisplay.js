import React from 'react'
import '../styles/ContactInfoDisplay.css'

function ContactInfoDisplay (props) {
  const { name, email, phone } = props

  return (
    <div className="contact-info-display">
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}

export default ContactInfoDisplay
