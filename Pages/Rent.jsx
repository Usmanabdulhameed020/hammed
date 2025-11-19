import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const rentalProperties = [
  {
    id: 1,
    title: "Modern 2-Bedroom Apartment",
    location: "Ikeja, Lagos",
    price: "₦350,000 / year",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
  },
  {
    id: 2,
    title: "Luxury Mini Flat",
    location: "Lekki Phase 1",
    price: "₦850,000 / year",
    type: "Mini Flat",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    title: "Self-Contained Room",
    location: "Yaba, Lagos",
    price: "₦250,000 / year",
    type: "Self Contain",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02ec",
  },

  {
    id: 4,
    title: "3-Bedroom Terrace Duplex",
    location: "Gbagada, Lagos",
    price: "₦1,200,000 / year",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f",
  },
  {
    id: 5,
    title: "Newly Built Mini Flat",
    location: "Surulere, Lagos",
    price: "₦600,000 / year",
    type: "Mini Flat",
    image: "https://images.unsplash.com/photo-1600585154154-98d06e4e8b1b",
  },
  {
    id: 6,
    title: "Affordable Self Contain",
    location: "Oshodi, Lagos",
    price: "₦180,000 / year",
    type: "Self Contain",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 7,
    title: "Modern Mini Flat with Balcony",
    location: "Lekki Phase 2",
    price: "₦750,000 / year",
    type: "Mini Flat",
    image: "https://images.unsplash.com/photo-1622015663313-1d71f6b16e65",
  },
  {
    id: 8,
    title: "1 Bedroom Apartment",
    location: "Victoria Island",
    price: "₦1,500,000 / year",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1613977257364-56ce948f5657",
  },
  {
    id: 9,
    title: "Standard Self Contain",
    location: "Yaba, Lagos",
    price: "₦230,000 / year",
    type: "Self Contain",
    image: "https://images.unsplash.com/photo-1600607687920-4eac4f3f95c9",
  },
];

export default function Rent() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const filtered = rentalProperties.filter((prop) => {
    const typeMatch = typeFilter === "All" || prop.type === typeFilter;
    const locationMatch =
      locationFilter === "All" || prop.location.includes(locationFilter);

    return typeMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="w-full bg-blue-600 text-white py-20 text-center shadow-xl">
        <h1 className="text-5xl font-bold">Find Rental Homes</h1>
        <p className="mt-3 text-lg opacity-90">
          Browse thousands of rental listings across Nigeria
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 p-5 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filter Rentals</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Apartment</option>
            <option>Mini Flat</option>
            <option>Self Contain</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option>All</option>
            <option>Ikeja</option>
            <option>Lekki</option>
            <option>Yaba</option>
            <option>Surulere</option>
            <option>Victoria Island</option>
            <option>Gbagada</option>
            <option>Oshodi</option>
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

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full text-lg">
            No rental properties match your filter.
          </p>
        ) : (
          filtered.map((property) => (
            <div
              key={property.id}
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
                  <p className="text-gray-500 text-sm mt-1">
                    {property.location}
                  </p>

                  <p className="text-blue-600 font-semibold mt-3">
                    {property.price}
                  </p>

                  <p className="text-sm text-gray-700 bg-gray-100 mt-2 inline-block px-2 py-1 rounded-lg">
                    {property.type}
                  </p>

                  <Link
                    to={`/rent/${property.id}`}
                    className="block mt-4 w-full bg-blue-600 text-white text-center py-2 rounded-lg"
                  >
                    View Details
                  </Link>
                  
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
