import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Contact from './pages/Contact'; 
import AboutUs from './pages/AboutUs'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
