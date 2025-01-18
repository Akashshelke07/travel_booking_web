<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login/Login.jsx';
import Booking from './component/Booking/Booking.jsx';
import Destination from './component/Destination';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
=======
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
>>>>>>> bc5b5a9fb1f2b1b2518431289ccac32a5c64f572
