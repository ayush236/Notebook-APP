import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    
    
    <div className='text-2xl flex gap-11 justify-center mt-4 shadow-2xl p-3 border rounded-2xl '>
        <Link to="/">Home</Link>
        <Link to="/pastes">pastes</Link>
        {/* <Link to ="/pastes/:id">Views</Link> */}
    </div>
  )
}

export default Navigation