import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-75 shadow-lg">
      <div className="flex items-center justify-between p-5 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white">Gym Fitness</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/dashboard" className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Dashboard
          </Link>
          <Link to="/tutorial" className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Tutorials
          </Link>
          <Link to="/ourplanes" className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Our Plans
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Contact
          </Link>
          <Link to="/profile" className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            CompleteProfile
          </Link>
          <Link to="/login">
            <button className="w-20 p-2 bg-blue-600 text-white hover:text-yellow-500 transition duration-300 ease-in-out rounded-md">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-800 bg-opacity-90 md:hidden">
          <Link to="/dashboard" onClick={toggleMenu} className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Dashboard
          </Link>
          <Link to="/tutorial" onClick={toggleMenu} className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Tutorials
          </Link>
          <Link to="/ourplanes" onClick={toggleMenu} className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Our Plans
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
            Contact
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-20 p-2 bg-blue-600 text-white hover:text-yellow-500 transition duration-300 ease-in-out rounded-md">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
