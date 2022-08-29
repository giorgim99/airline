import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {


  return (
      <> 
        <Router>
            <div className='app'>
            <Navbar />
              <div className='content'>
                <AnimatedRoutes />
              </div>
            </div>



        </Router>
      
      
      </>


  );
}

export default App;
