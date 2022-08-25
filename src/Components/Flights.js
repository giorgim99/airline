import React from 'react'
import './Flights.css'
import sign from './warning-sign.png'
import { Link } from 'react-router-dom'


function Flights() {
 

  return (

    <div className='flightsroute'>
      <div className='flightsroutebg'></div>

        <div className='unable-div'>
          <img src={sign}></img>
          <h1>Apologies, we do not have a match for your flight</h1>
          <p>Due to COVID-19 regulations, our airlines are temporarily closed and unable to operate</p>
        </div>
        <Link to='/' className='home-link'>Home</Link>
        
    </div>
  )
}

export default Flights