import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const saleProperties = [
  {
    id: 101,
    title: "4-Bedroom Luxury Duplex",
    location: "Lekki Phase 1",
    price: "₦120,000,000",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 102,
    title: "Beautiful Family Bungalow",
    location: "Ibadan, Oyo",
    price: "₦45,000,000",
    type: "Bungalow",
    image: "https://images.unsplash.com/photo-1600585154154-8bb8c3d41a7b",
  },
  {
    id: 103,
    title: "Modern Semi-Detached Duplex",
    location: "Abuja",
    price: "₦85,000,000",
    type: "Semi-Detached",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
];

export default function Sale() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const filtered = saleProperties.filter((prop) => {
    const typeMatch =
      typeFilter === "All" || prop.type === typeFilter;
    const locationMatch =
      locationFilter === "All" || prop.location.includes(locationFilter);

    return typeMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="w-full bg-blue-600 text-white py-20 text-center shadow-xl">
        <h1 className="text-5xl font-bold">Properties For Sale</h1>
        <p className="mt-3 text-lg opacity-90">
          Explore homes, duplexes, and buildings available for purchase.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 p-5 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filter Homes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Duplex</option>
            <option>Bungalow</option>
            <option>Semi-Detached</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Lekki</option>
            <option>Ibadan</option>
            <option>Abuja</option>
          </select>

          <button
            onClick={() => {
              setTypeFilter("All");
              setLocationFilter("All");
            }}
            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full text-lg">
            No sale properties match your filter.
          </p>
        ) : (
          filtered.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <div>
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{property.location}</p>

                  <p className="text-blue-600 font-semibold mt-3">
                    {property.price}
                  </p>

                  <p className="text-sm text-gray-700 bg-gray-100 mt-2 inline-block px-2 py-1 rounded-lg">
                    {property.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
