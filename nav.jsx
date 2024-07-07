import React from 'react'

export default function Nav() {
  
   return(
    
     <nav>
       <div className = 'nav-logo'>
         <img src = "src/Components/Images/logo.png" />
       </div>
       <ul className = 'nav-icons'>
         <li><a href = "#Home">Home</a></li>
         <li><a href = "#Programs">Programs</a></li>
         <li><a href = "#About">About</a></li>
         <li><a href = "#Gallery">Gallery</a></li>
         <li><a href = "#Testimonials">Testimonials</a></li>
         <li id = "contact"><a href = "#Contact">Contact Us</a></li>
       </ul>
     </nav>
   )
}

