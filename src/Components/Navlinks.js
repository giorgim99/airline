import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks'



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
      <Link to='/flights' className='nav-links' >
          Flights
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