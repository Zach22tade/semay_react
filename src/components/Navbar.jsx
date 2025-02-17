import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png'; // Adjust the path if necessary
import '../styles/Navbar.css'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className="bg-tertiary opacity-90 fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Tikur Misil Logo" className="h-14" />
        </Link>
        <div className="hidden md:flex space-x-6">
          {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              custom={index} // Pass the index for staggered effect
              whileHover="hover"
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-primary hover:text-secondary transition duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="text-primary">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <motion.div
        className="md:hidden bg-background-primary bg-opacity-90 overflow-hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex flex-col items-center py-4">
          {['About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              custom={index} // Pass the index for staggered effect
              whileHover="hover"
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-primary hover:text-secondary transition duration-300 py-2"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;