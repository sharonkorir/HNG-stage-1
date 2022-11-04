import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Footer from './components/footer';
import {  BrowserRouter as 
  Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
  return(
    <Router>
      <Routes>
        <Route path = '/' exact element ={<Homepage />} />
        <Route path = '/contact' element ={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
