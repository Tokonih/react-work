import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../src/Pages/About"
import Booking from "../src/Pages/Booking"
import Contact from "../src/Pages/Contact"
import Menu from "../src/Pages/Menu" 
import Home from "../src/Pages/Home"
// import Navigation from "./Component/Navigation";
// import Banner from "./Component/Banner"
// import Section1 from "./Component/Section1"
// import Section3 from "./Component/Section3"
// import  Section4 from "./Component/Section4"
// import  Section5 from "./Component/Section5"

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
