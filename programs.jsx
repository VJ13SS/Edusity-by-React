import React from 'react'

export default function Programs() {
  
   return (
     <div className = 'programs' id = 'Programs'>
       <h4>Our Programs</h4>
       <h2>What we Offer?</h2>
       <div className = 'program-details'>
         <div className = 'program'>
           <img src = 'src/Components/Images/program-1.png' />
           <div className = 'program-caption'>
             <img src = 'src/Components/Images/program-icon-1.png' />
             <p>Graduation Degree </p>
           </div>
         </div>
         <div className = 'program'>
           <img src = 'src/Components/Images/program-2.png' />
           <div className = 'program-caption'>
             <img src = 'src/Components/Images/program-icon-2.png' />
             <p>Masters Degree </p>
           </div>
         </div>
         <div className = 'program'>
            <img src = 'src/Components/Images/program-3.png' />
           <div className = 'program-caption'>
             <img src = 'src/Components/Images/program-icon-3.png' />
              <p>PHD Programs</p>
            </div>
          </div>
       </div>
     </div>
   )
}
