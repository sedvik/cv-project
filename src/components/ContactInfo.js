import React from 'react'
import ContactInfoDisplay from './ContactInfoDisplay'
import ContactInfoEdit from './ContactInfoEdit'
import EditBtn from './EditBtn'
import SubmitBtn from './SubmitBtn'
import '../styles/ContactInfo.css'

class ContactInfo extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { editable, contactInfo } = this.props

    return (
      <div className="contact-info-container">
        <h1>Contact Information</h1>
        {editable
          ? <ContactInfoEdit contactInfo={contactInfo} />
          : <ContactInfoDisplay contactInfo={contactInfo} />
        }
        {editable
          ? <SubmitBtn />
          : <EditBtn />
        }
      </div>
    )
  }
}

export default ContactInfo
