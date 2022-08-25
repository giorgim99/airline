import React from 'react'
import './Search.css'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div className='search-container'>
        <div className='search-box'>
            <div className='top-part'>
                <h1>Search</h1>
                <br />
                <div className='input-items'>
                  <input type='text' placeholder='From' />
                  <input type='text' placeholder='To' />
                  <ReactDatePicker />
                  <ReactDatePicker />
                  <input type='text' placeholder='Passenger(s)' />
                  <Link to='/flights' className='search-btn'>🔍</Link>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Search