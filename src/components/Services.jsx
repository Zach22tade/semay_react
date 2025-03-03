import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: ''
  });

  const services = [
    {
      id: 1,
      title: 'Weddings',
      items: [
        'Pre-wedding photoshoot - 300 birrs',
        'Full-day coverage - 300 birrs',
        'Album design - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs',
        'Drone coverage - 300 birrs'
      ]
    },
    {
      id: 2,
      title: 'Graduation',
      items: [
        'Individual portraits',
        'Group photos',
        'Ceremony coverage',
        'Digital copies'
      ]
    },
    {
      id: 3,
      title: 'Parties',
      items: [
        'Candid photography',
        'Themed decorations shots',
        'Group photos',
        'Event highlights video'
      ]
    },
    {
      id: 4,
      title: 'Events',
      items: [
        'Corporate events coverage',
        'Product launches',
        'Conferences',
        'Live streaming'
      ]
    }
  ];

  const handleOrderClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Typically, you'd send this data to your backend or email service
    console.log('Order details:', {
      service: selectedService,
      ...formData
    });
    alert('Order request submitted! We will contact you soon.');
    setShowForm(false);
    setFormData({ name: '', phone: '', details: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            {/* Title */}
            <h2 className="  text-black font-bold mb-2 ">{service.title}</h2>
            
            {/* (Optional) Service items or any other info */}
            <ul className="mb-4 flex-grow">
              {service.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Order Button at the bottom */}
            <button
              onClick={() => handleOrderClick(service.title)}
              className="bg-orange-300 text-black px-4 py-2 rounded hover:bg-orange-400 mt-auto"
            >
              Order
            </button>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl text-black font-semibold">Order {selectedService}</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-black" >Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 border rounded"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-black">Additional Details</label>
                <textarea
                  className="w-full p-2 border rounded h-32"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-300 text-black px-6 py-2 rounded hover:bg-orange-400 w-full"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
