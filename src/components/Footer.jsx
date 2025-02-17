import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background-primary bg-opacity-90 p-8">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary font-mono uppercase">Tikur Misil</h2>
          <div className="mt-4 space-x-0 md:space-x-6 flex flex-col md:flex-row">
            <Link to="/about" className="text-primary hover:text-secondary transition duration-300 mb-2 md:mb-0">About</Link>
            <Link to="/services" className="text-primary hover:text-secondary transition duration-300 mb-2 md:mb-0">Services</Link>
            <Link to="/portfolio" className="text-primary hover:text-secondary transition duration-300 mb-2 md:mb-0">Portfolio</Link>
            <Link to="/testimonials" className="text-primary hover:text-secondary transition duration-300 mb-2 md:mb-0">Testimonials</Link>
            <Link to="/contact" className="text-primary hover:text-secondary transition duration-300 mb-2 md:mb-0">Contact</Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold text-primary text-center">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-300">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600 text-sm text-primary">© {new Date().getFullYear()} Tikur Misil. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;