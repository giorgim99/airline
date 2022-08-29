import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Flights from './Flights';
import Contact from './Contact';
import {AnimatePresence} from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation( )
  
  
    return (
        <AnimatePresence>

            <div>
                <Switch location={location} key={location.pathname}>
                            
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/flights'>
                        <Flights />
                    </Route>

                    <Route path='/contact'>
                        <Contact />
                    </Route>

                </Switch>
           </div>

        </AnimatePresence>
  )
}

export default AnimatedRoutes