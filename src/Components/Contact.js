import './Contact.css'
import React from 'react'
import gmailicon from './gmailicon.png'
import githubicon from './githubicon.png'
import {motion} from 'framer-motion';


function Contact() {
  return (
    <motion.div 
    className='contact-route'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}
    >
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
    </motion.div>
  )
}

export default Contact