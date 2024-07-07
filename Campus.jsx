import React from 'react'
import {nanoid} from 'nanoid'

export default function Campus() {
  //Static Creation of the data (photos) use a seperate file if needed
   const photos = [
     {
       id:nanoid(),
      src:'src/Components/Images/gallery-1.png'},
     {
       id:nanoid(),
      src:'src/Components/Images/gallery-2.png'},
     {
       id:nanoid(),
     src:'src/Components/Images/gallery-3.png'
     }
     ,{
       id:nanoid(),
       src:'src/Components/Images/gallery-4.png'}]

  const campusPhotos = photos.map(photo =>(
    <div className = "campus-photo" key = {photo.id}>
      <img src = {photo.src} />
    </div>
  ))

  return (
    <div className = "campus" id = "Gallery">
      <h4>Gallery</h4>
      <h2>Campus Photo's</h2>
      <div className = "campus-photos">
        {campusPhotos}
      </div>
      <button>Explore <img src = "src/Components/Images/white-arrow.png"/></button>
    </div>
  )
}
