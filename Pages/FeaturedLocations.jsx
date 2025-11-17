// src/components/FeaturedLocations.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedLocations = () => {
  const locations = [
    {
      name: "Lagos",
      image: "https://images.unsplash.com/photo-1596358057133-9d2fbc0fbe37?auto=format&fit=crop&w=1600&q=80",
      properties: 120,
    },
    {
      name: "Abuja",
      image: "https://images.unsplash.com/photo-1555790584-27a7b3f2c3c7?auto=format&fit=crop&w=1600&q=80",
      properties: 85,
    },
    {
      name: "Port Harcourt",
      image: "https://images.unsplash.com/photo-1578334936695-fd2a3f5d0e8e?auto=format&fit=crop&w=1600&q=80",
      properties: 60,
    },
    {
      name: "Ibadan",
      image: "https://images.unsplash.com/photo-1618235834626-1e26460cfc1d?auto=format&fit=crop&w=1600&q=80",
      properties: 45,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explore by <span className="text-sky-600">City</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Discover properties in Nigeria’s most popular locations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Link to={`/properties?city=${loc.name}`}>
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                  <h3 className="text-white text-2xl font-bold">{loc.name}</h3>
                  <p className="text-gray-200">{loc.properties} properties</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
