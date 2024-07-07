import React from 'react'
import {nanoid} from 'nanoid'

export default function Contact(){
  //static data array creation(contactIcons) .use separate file if needed
  const contactIcons = [{
    id: nanoid(),
    img:"src/Components/Images/msg-icon.png",
    text:"Message@gmail.com"
  },
    {
      id: nanoid(),
    img:"src/Components/Images/phone-icon.png",
    text:"+1234567890"
  },
  {
    id: nanoid(),
    img:"src/Components/Images/location-icon.png",
  text:'1234 Street,House City,London'
  }
  ]

  const contactDetails = contactIcons.map((contactIcon) =>(
    <div className = "contact-icon" key = {contactIcon.id}>
      <img src ={contactIcon.img} />
      <p>{contactIcon.text}</p>
    </div>
  ))


  return(
    <div className = "contact" id = "Contact">
      <h4>Contact</h4>
      <h2>Get in Touch</h2>
      <div className = "contact-container">
        <div className = "contact-details">
          <h2>Send Us a Message ✨</h2>
          <p>Feel Free to contact and share your Queries.Open on all working Days</p>
          <div className = "contact-icons">
            {contactDetails}
          </div>
        </div>
        <div className = "contact-form">
          <h4>Enter your Name</h4>
          <input types = 'text' placeholder= 'Enter your Name' />
          <h4>Enter your Email</h4>
          <input type = 'email' placeholder = 'Enter your Email' />
          <h4>Enter your Message </h4>
          <textarea placeholder = 'Enter your Message' />
        </div>
      </div>
    </div>
  )
}
