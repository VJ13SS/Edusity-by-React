import React from 'react'
import {nanoid} from 'nanoid'
export default function Testimonials() {

  //Static data Array creation..Use a seperate file if needed.
  //Testimonials Data 
   const testimonialsData = [
     {
       id: nanoid(),
     name:"Georgina",
       place:"Canada",
     img:"src/Components/Images/user-1.png",
     text:"A perfect place for Learners to learn and grow. I am so happy to ne a part of this community"
   },
     {
       id: nanoid(),
   name:"Bhagat",
       place:"USA",
     img:"src/Components/Images/user-2.png",
     text:"It is a great pleasure to be a part of the esteemed community"
     },
     {
       id: nanoid(),
   name:"Rona",
       place:"India",
     img:"src/Components/Images/user-3.png",
       text:"Thanks to my professors, my mentors and my college for what i had become"
     },
     {
       id: nanoid(),
   name:"George",
       place:"Russia",
     img:"src/Components/Images/user-4.png",
       text:"I am extremely delighted to be form Edusity "
     }
   ]

  const testimonials = testimonialsData.map(testimonial =>(
    <div className = "testimonial" key = {testimonial.id}>
      <div className = 'testimonial-header'>
        <div className = 'testimonial-img'><img src = {testimonial.img} /></div>
        <div className = 'testimonial-person'>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.place}</p>
        </div>
      </div>
      <div className = "testimonial-text">
        <p>{testimonial.text}</p>
      </div>
    </div>
  ))

  return (
    <div className = "testimonials" id = "Testimonials">
      <h4>Testimonials</h4>
      <h2>What Our Students Say?</h2>
      <div className = "testimonials-container">
          {testimonials}
      </div>
    </div>
  )
}
