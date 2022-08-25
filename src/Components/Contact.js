import './Contact.css'
import React from 'react'
import gmailicon from './gmailicon.png'
import githubicon from './githubicon.png'

function Contact() {
  return (
    <div className='contact-route'>
        <div>
            <h1>Contact Us Here!</h1>

            <div className='phonenumbers-div'>
                <h2>Phone Numbers</h2>
                +995 579 90 28 18
                <br></br>
                +995 557 13 22 05
            </div>

            <ul className='imglinks'>
                <li><a href='mailto:maisuradze200329@gmail.com'><img src={gmailicon}></img></a></li>
                <li><a href='https://github.com/Andregon29?tab=repositories'><img src={githubicon}></img></a></li>
            </ul>
            
        </div>
    </div>
  )
}

export default Contact