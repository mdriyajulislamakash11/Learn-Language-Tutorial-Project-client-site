import React from 'react'
import { useParams } from 'react-router-dom'

const TutorDetails = () => {
  const id = useParams()
  console.log(id)
  return (
    <div>TutorDetails</div>
  )
}

export default TutorDetails