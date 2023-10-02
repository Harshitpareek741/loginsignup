import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Home() {
    const location = useLocation()
    
  return (
    <div className='homepage'>
      <br />
      <h1 >Hello {location.state.id} </h1>
    
      <h3> welcome to the HomePage </h3>
    </div>
  )
}
