import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const saleProperties = [
  {
    id: 1,
    title: "Skyline Royal Duplex",
    location: "Banana Island, Lagos",
    price: "₦300,000,000",
    type: "Luxury Duplex",
    image: "https://images.unsplash.com/photo-1613977257364-56ce948f5657",
  },
  {
    id: 2,
    title: "Royal Palm Waterfront Duplex",
    location: "Victoria Island",
    price: "₦450,000,000",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600585154154-98d06e4e8b1b",
  },
  {
    id: 3,
    title: "Contemporary 3-Bedroom Condo",
    location: "Lekki Phase 1",
    price: "₦180,000,000",
    type: "Condo",
    image: "https://images.unsplash.com/photo-1556912999-11d5c4f831c8",
  },
  {
    id: 4,
    title: "Fully Detached 5-Bedroom Duplex",
    location: "Chevron Lekki",
    price: "₦230,000,000",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 5,
    title: "Modern 2-Bedroom Terrace",
    location: "Osapa London",
    price: "₦95,000,000",
    type: "Terrace",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 6,
    title: "Luxury Mini Mansion",
    location: "Gbagada Phase 2",
    price: "₦150,000,000",
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1622015663313-1d71f6b16e65",
  },
];

export default function Buy() {
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = saleProperties.filter((prop) => {
    const typeMatch = typeFilter === "All" || prop.type === typeFilter;
    return typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      <div className="w-full bg-blue-600 text-white py-20 text-center shadow-xl">
        <h1 className="text-5xl font-bold">Buy Your Dream Home</h1>
        <p className="mt-3 text-lg opacity-90">
          Explore premium properties available for purchase
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filter Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Penthouse</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Mansion</option>
            <option>Bungalow</option>
            <option>Studio</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Ikoyi</option>
            <option>Lekki</option>
            <option>Victoria Island</option>
            <option>Surulere</option>
            <option>Yaba</option>
          </select>

          <button
            onClick={() => {
              setTypeFilter("All");
              setLocationFilter("All");
            }}
            className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* NEW DIFFERENT LAYOUT */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{property.title}</h3>
              <p className="text-gray-600 mt-1">{property.location}</p>
              <p className="text-blue-600 font-bold mt-3">{property.price}</p>

              <Link
                to={`/buy/${property.id}`}
                className="block mt-4 w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
