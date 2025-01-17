import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Booking from "./component/Booking"
import Destination from "./component/Destination"
import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer'






function App() {
 
  return(
   
  <BrowserRouter >
  
  <>
  
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Destination' element={<Destination/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Booking' element={<Booking/>}/>
   
  
  </Routes>
  

</>
<Footer/>
</BrowserRouter>
);
}

export default App
