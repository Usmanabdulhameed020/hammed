import React, { useState } from "react";
import { Link } from "react-router-dom";
import JoinNow from "./JoinNow";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/src/logo.png" alt="StayFinder Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-sky-700">StayFinder</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/rent" className="text-gray-700 hover:text-sky-600">Rent</Link>
          <Link to="/buy" className="text-gray-700 hover:text-sky-600">Buy</Link>
          <Link to="/mortgage" className="text-gray-700 hover:text-sky-600">Mortgage</Link>
          <Link to="/find-an-agent" className="text-gray-700 hover:text-sky-600">Find an Agent</Link>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer px-4 py-2 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition"
          >
            Join Now
          </button>
        </div>
      </nav>

      <JoinNow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
