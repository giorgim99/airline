import React, { useState } from 'react'
import './Navbar.css'
import Navlinks from './Navlinks'
import { Link } from 'react-router-dom'


function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  let navLink = document.getElementById('nav-links-ul')

  
  return (
    

    <>
      <nav >
        <div className='navbar'>

          <Link to='/'>
            Maiz
          </Link>
         
          <div className='nav-container'>
            
            {click && <Navlinks />}

            <div className='nav-opener' onClick={handleClick}>
              <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
            </div>

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar