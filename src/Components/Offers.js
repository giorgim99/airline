import React from 'react'
import './Offers.css'
import turkey from './turkey.jpg'
import vienna from './vienna.jpg'
import paris from './paris.jpg'
import gmailicon from './gmailicon.png'
import githubicon from './githubicon.png'
import { Link } from 'react-router-dom'

function Offers() {
  
  
  function toRick(){
    
  }
  
  
  
  return (


    <div className='offers-container'>
        
        <div className='offer-div'>
            <h1>Our Offers To You!</h1>

            <h2>We offer the best prices on the market!</h2>
            
            
            <div className='offeritems'>
            
              
              <div className='singleItem'>
                <h3>
                  Visit Turkey
                </h3>
                <img src={turkey}></img>
                <h3>
                  From 68$
                </h3>
                <p><Link class="divLink" to='/flights'>ayowaduhek</Link></p>
              </div>
                
              
              <div className='singleItem'>
                <h3>
                  Visit Vienna
                </h3>
                <img src={vienna}></img>
                <h3>
                  From 419$
                </h3>
              </div>
            
               
              <div className='singleItem'>
                <h3>
                  Visit Paris
                </h3>
                <img src={paris}></img>
                <h3>
                  From 290$
                </h3>

              </div>

              <br></br>

              <Link className='alldestinations' to='/flights'>See All Destinations</Link>

            </div>


            <div>
              <p className='welcome-p'>
              Welcome to the Maiz Airways website! Our airline operates direct flights from Tbilisi to Tel Aviv, Vienna, Amsterdam, Paris and Yerevan. The fleetpark consists of Bing 737-700, Bong 737-800 and one CR7 200. Our crew consists of highly qualified pilots and cabin staff who get their education and training in worldwide qualified centers. They are constantly improving their knowledge and skills. Safety and comfort of flights are the priority of Maiz Airways. All our tariffs include hand luggage, as well as beverages. We are looking to welcome you on board! Fly with Maiz Airways!
              </p>
            </div>
        </div>

        <ul>
          <li><a href='https://github.com/Andregon29?tab=repositories'><i><u>Other Works From The Creator</u></i></a></li>
          <li><a href='https://fancy-twilight-8a3589.netlify.app/'><i><u>About The Creator</u></i></a></li>
          <li><a href="mailto:maisuradze200329@gmail.com"><i><u>Contact The Creator</u></i></a></li>
        </ul>

        <ul className='imglinks'>
          <li><a href='mailto:maisuradze200329@gmail.com'><img src={gmailicon}></img></a></li>
          <li><a href='https://github.com/Andregon29?tab=repositories'><img src={githubicon}></img></a></li>
        </ul>
    </div>

  )
}

export default Offers