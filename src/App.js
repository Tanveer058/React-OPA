import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './Components/1Navbar/navbar';
import Mainpart from './Components/2mainpart/mainpart';
import Footer from './Components/7footer/footer';
import Home from './Pages/home';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/success'
import { auth } from './firebase/firebase'; // Import Firebase auth

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <Contact /> */}
    </Router>
  );
}

export default App;
