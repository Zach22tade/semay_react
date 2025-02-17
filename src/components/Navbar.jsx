import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Logo.png'; // Adjust the path if necessary
import '../styles/Navbar.css'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-tertiary opacity-90 fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Tikur Misil Logo" className="h-14" /> {/* Adjust height as needed */}
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-primary hover:text-secondary transition duration-300">About</Link>
          <Link to="/services" className="text-primary hover:text-secondary transition duration-300">Services</Link>
          <Link to="/portfolio" className="text-primary hover:text-secondary transition duration-300">Portfolio</Link>
          <Link to="/testimonials" className="text-primary hover:text-secondary transition duration-300">Testimonials</Link>
          <Link to="/contact" className="text-primary hover:text-secondary transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="text-primary">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background-primary bg-opacity-90">
          <div className="flex flex-col items-center py-4">
            <Link to="/about" className="text-primary hover:text-secondary transition duration-300 py-2">About</Link>
            <Link to="/services" className="text-primary hover:text-secondary transition duration-300 py-2">Services</Link>
            <Link to="/portfolio" className="text-primary hover:text-secondary transition duration-300 py-2">Portfolio</Link>
            <Link to="/testimonials" className="text-primary hover:text-secondary transition duration-300 py-2">Testimonials</Link>
            <Link to="/contact" className="text-primary hover:text-secondary transition duration-300 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;