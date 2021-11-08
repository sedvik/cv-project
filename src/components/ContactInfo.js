import React, { useState } from 'react'
import ContactInfoDisplay from './ContactInfoDisplay'
import ContactInfoEdit from './ContactInfoEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import '../styles/ContactInfo.css'

function ContactInfo () {
  const [editable, setEditable] = useState(true)
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  function setToEditable () {
    setEditable(true)
  }

  function setToDisplay () {
    setEditable(false)
  }

  function updateContactInfo (property, value) {
    const updatedContactInfo = Object.assign(
      {},
      contactInfo,
      {
        [property]: value
      }
    )
    setContactInfo(updatedContactInfo)
  }
  return (
    <div className="contact-info-container">
      <h1>Contact Information</h1>
      {editable
        ? <ContactInfoEdit contactInfo={contactInfo} updateContactInfo={updateContactInfo} />
        : <ContactInfoDisplay contactInfo={contactInfo} />
      }
      {editable
        ? <SubmitBtn setToDisplay={setToDisplay} />
        : <EditBtn setEditable={setToEditable} />
      }
    </div>
  )
}

export default ContactInfo
