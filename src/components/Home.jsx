import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css"; // Ensure you have the styles for spacing, layout, etc.

const Home = () => {
  // Background images for the slider
  const backgroundImages = [
    "https://picsum.photos/2000/2000?random=1",
    "https://picsum.photos/2000/2000?random=2",
    "https://picsum.photos/2000/2000?random=3",
  ];

  // State for the current background image
  const [currentImage, setCurrentImage] = useState(0);

  // Background image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative overflow-hidden h-screen bg-background-secondary">
      {/* Background Image Slider */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          initial={{ opacity: 0 }}
          animate={currentImage === index ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-shadow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Tikur Misil
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-shadow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Capturing Moments, Creating Memories
        </motion.p>
        <div className="space-x-0 flex flex-col md:flex-row">
          <motion.button
            className="mr-4 bg-secondary text-tertiary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 mb-2 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="bg-secondary text-tertiary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Session
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      img: "https://picsum.photos/400/600?random=4",
      title: "Sunset Bliss",
      category: "Nature Photography",
    },
    {
      img: "https://picsum.photos/400/600?random=5",
      title: "Urban Vibes",
      category: "Street Photography",
    },
    {
      img: "https://picsum.photos/400/600?random=6",
      title: "Golden Hour",
      category: "Portrait Photography",
    },
    {
      img: "https://picsum.photos/400/600?random=7",
      title: "Architectural Marvel",
      category: "Architecture",
    },
    {
      img: "https://picsum.photos/400/600?random=8",
      title: "Serene Waters",
      category: "Landscape",
    },
    {
      img: "https://picsum.photos/400/600?random=9",
      title: "City Lights",
      category: "Night Photography",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Our Portfolio</h2>
        <p className="text-gray-300 mt-2">Explore some of our recent works</p>
      </div>

      {/* Auto-Scrolling Portfolio */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 group relative"
              style={{ width: "300px" }}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 group-hover:shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption with Title & Category */}
              <div className="mt-4 text-center">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Home />
      <Portfolio />
    </div>
  );
};

export default HomePage;
