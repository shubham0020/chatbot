import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';


function App() {
  return (


    <BrowserRouter>
      <Routes>

      <Route path="/home" exact element={<Home/>} />
          <Route path="/" element={<Home/>} />

          <Route  path="/about" element={<About/>} />
          <Route  path="/services" element={<Services/>} />
          <Route  path="/portfolio" element={<Portfolio/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/faq" element={<Faq/>} />
          
         
          
          <Route path="/" element={<Footer/>} /> 
         
      </Routes>
    </BrowserRouter>

  );
}

export default App;
