import React from 'react'
import "./Contact.css"


function Contact() {
  return (
    <div className='footer'>
    
    <h2 className='footer_contact'>Reach me at</h2>
    <p className='contact_number'><a  className='link' href="tel:4389247899"> +1 (438)-924-7899</a></p>
    <p className='contact_mail'><a  className='link' href="mailto:akhilatadi@gmail.com"> akhilatadi@gmail.com</a></p>
    <p className='footer_name'>© Akhileswari Tadi 2021-2022 / All Rights Reserved
    </p>
    <p className='footer_name'> This website is created with React and Firebase.</p>
    </div>
  )
}

export default Contact