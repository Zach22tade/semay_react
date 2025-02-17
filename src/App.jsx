import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjusted path
import About from './components/About'; // Adjusted path
import Services from './components/Services'; // Adjusted path
import Portfolio from './components/Portfolio'; // Adjusted path
import Testimonials from './components/Testimonials'; // Adjusted path
import Contact from './components/Contact'; // Adjusted path
import Home from './components/Home'; // Adjusted path for Home component
import Footer from './components/Footer'; // Adjusted path
import './index.css'; // Import your Tailwind CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> {/* Ensure you have a Home component */}
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;