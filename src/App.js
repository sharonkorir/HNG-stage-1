import Homepage from './pages/homepage';
import Contact from './pages/contact';
import {  BrowserRouter as 
  Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App(){
  return(
    <Router>
      <Routes>
        <Route path = '/' exact element ={<Homepage />} />
        <Route path = '/contact' element ={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
