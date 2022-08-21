import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './Components/Introduction';
import Offers from './Components/Offers';
import Search from './Components/Search';

//Routes instead of Switch
function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Introduction />
          <Search />
          <Offers />

          <Routes>

            <Route path='/' exact />

          </Routes>

        </Router>
      
      
      </>


  );
}

export default App;
