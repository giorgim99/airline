import React from 'react'
import './Offers.css'
import turkey from './turkey.jpg'
import vienna from './vienna.jpg'
import paris from './paris.jpg'
import gmailicon from './gmailicon.png'
import githubicon from './githubicon.png'
import { Link } from 'react-router-dom'


const CityListings = (props) =>{

  return(
   
    <article  className='singleItem'>
      <h3>{props.visitcity}</h3>
      <img src={props.cityimg} />
      <h3>{props.cityprice}</h3>
    </article>
  )

}


function Offers() {
  const pageVisitDelay = () =>{
    setTimeout(()=>{}, 2000)
  }
  return (


    <div className='offers-container'>
        
        <div className='offer-div'>
            <h1>Our Offers To You!</h1>

            <h2>We offer the best prices on the market!</h2>
            
            
            <div className='offeritems'>

              <CityListings 
              visitcity='Visit Turkey'
              cityimg={turkey}
              cityprice='From 68$'
              />
              <CityListings 
              visitcity='Visit Vienna'
              cityimg={vienna}
              cityprice='From 410$'
              />
              <CityListings 
              visitcity='Visit Paris'
              cityimg={paris}
              cityprice='From 290$'
              />
            
             <p><Link class="divLink" to='/flights'></Link></p>

             <br></br>

             <Link className='alldestinations' to='/flights' >See All Destinations</Link>

            </div>


            <div>
              <p className='welcome-p'>
              Welcome to the Main Airways website! Our airline operates direct flights from Tbilisi to Tel Aviv, Vienna, Amsterdam, Paris and Yerevan. The fleetpark consists of Bing 737-700, Bong 737-800 and one CR7 200. Our crew consists of highly qualified pilots and cabin staff who get their education and training in worldwide qualified centers. They are constantly improving their knowledge and skills. Safety and comfort of flights are the priority of Maiz Airways. All our tariffs include hand luggage, as well as beverages. We are looking to welcome you on board! Fly with Maiz Airways!
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