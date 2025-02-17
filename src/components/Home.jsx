import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css'; // Optional: Add any additional styling here

const Home = () => {
  const backgroundImages = [
    'https://picsum.photos/2000/2000?random=1',
    'https://picsum.photos/2000/2000?random=2',
    'https://picsum.photos/2000/2000?random=3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [backgroundImages.length]);

  return (
    <div className="relative overflow-hidden h-screen bg-background-secondary">
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          initial={{ opacity: 0 }}
          animate={currentImage === index ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
      ))}
      <div className="container mx-auto flex flex-col justify-center items-center h-full relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Tikur Misil</h1>
        <p className="text-lg md:text-xl mb-8 text-shadow">Capturing Moments, Creating Memories</p>
        <div className="space-x-0 flex flex-col md:flex-row">
          <button className="mr-4 bg-secondary text-tertiary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 mb-2 md:mb-0">
            Learn More
          </button>
          <button className="bg-secondary text-tertiary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;