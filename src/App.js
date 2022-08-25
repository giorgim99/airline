import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Introduction from './Components/Introduction';
import Offers from './Components/Offers';
import Search from './Components/Search';
import Flights from './Components/Flights';

//Routes instead of Switch
function App() {
  return (
      <>
        <Router>
            <div className='app'>
            <Navbar />
              <div className='content'>
                <Switch>
                  
                  <Route exact path='/'>
                    <Introduction />
                    <Search />
                    <Offers />
                  </Route>

                  <Route path='/flights'>
                    <Flights />
                  </Route>

                </Switch>
              </div>
            </div>



        </Router>
      
      
      </>


  );
}

export default App;
