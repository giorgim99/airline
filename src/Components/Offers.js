import React from 'react'
import './Offers.css'
import turkey from './turkey.jpg'
import vienna from './vienna.jpg'
import paris from './paris.jpg'

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
                <p><a class="divLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">ayowaduhek</a></p>
              </div>
                
              
              <div className='singleItem'>
                <h3>
                  Visit Vienna
                </h3>
                <img src={vienna}></img>
                <h3>
                  From 419$
                </h3>
                <p><a class="divLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">ayowaduhek</a></p>
              </div>
            
               
              <div className='singleItem'>
                <h3>
                  Visit Paris
                </h3>
                <img src={paris}></img>
                <h3>
                  From 290$
                </h3>

                 <p><a class="divLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">ayowaduhek</a></p>
              </div>

              <br></br>

              <a className='alldestinations' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">See All Destinations</a>

            </div>



            <p className='welcome-p'>
            Welcome to the Maiz Airways website! Our airline operates direct flights from Tbilisi to Tel Aviv, Vienna, Amsterdam, Paris and Yerevan. The fleetpark consists of Bing 737-700, Bong 737-800 and one CR7 200. Our crew consists of highly qualified pilots and cabin staff who get their education and training in worldwide qualified centers. They are constantly improving their knowledge and skills. Safety and comfort of flights are the priority of Maiz Airways. All our tariffs include hand luggage, as well as beverages. We are looking to welcome you on board! Fly with Maiz Airways!
            </p>
        </div>

    </div>

  )
}

export default Offers