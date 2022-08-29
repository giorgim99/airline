import React from 'react'
import './Flights.css'
import sign from './warning-sign.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion';


function Flights() {
 

  return (

    <motion.div className='flightsroute'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}
    >
      <div className='flightsroutebg'></div>

        <div className='unable-div'>
          <img src={sign}></img>
          <h1>Apologies, we do not have avaliable flights for the time being</h1>
          <p>Due to COVID-19 regulations, our airlines are temporarily closed and unable to operate</p>
        </div>
        <Link to='/' className='home-link'>Home</Link>
        
    </motion.div>
  )
}

export default Flights