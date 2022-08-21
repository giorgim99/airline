import React from 'react'
import { Link } from 'react-router-dom'



function Navlinks() {
  return (
    <div id='nav-links'>

    <ul id='nav-links-ul'>
      <li>
        <Link to='/' className='nav-links' >
          Home
        </Link>
      </li>
      
      <li>
      <Link to='/work' className='nav-links' >
          Work
        </Link>
      </li>
      
      <li>
      <Link to='/contact' className='nav-links' >
          Contact
        </Link>
      </li>
    </ul>

  </div>
  )
}

export default Navlinks