import React from 'react';
import './MembershipPlane.css';
import { plansData } from '../data/PlaneData';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MembershipPlans = () => {
  return (
    <>
      <div className="plans-container flex flex-col bg-gray-800 relative top-16 min-h-screen px-4 md:px-16 py-8">
        {/* Programs Header */}
        <div className="programs-header bg-gray-900 text-center p-4 rounded text-yellow-300 mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="text-2xl md:text-3xl font-bold">Ready to Start</span>
          <span className="text-2xl md:text-3xl font-bold">Your Journey</span>
          <span className="text-2xl md:text-3xl font-bold">Now With Us</span>
        </div>

        {/* Plans Section */}
        <div className="plans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan, i) => (
            <div className="plan bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col items-center" key={i}>
              {/* Plan Icon */}
              <div className="mb-4">{plan.icon}</div>

              {/* Plan Name and Price */}
              <span className="text-lg md:text-xl font-semibold">{plan.name}</span>
              <span className="text-2xl md:text-3xl font-bold mt-2">${plan.price}</span>

              {/* Features */}
              <div className="features mt-4 mb-6 space-y-2 w-full text-center">
                {plan.features.map((feature, i) => (
                  <div className="feature flex items-center justify-center" key={i}>
                    <img src="src/assets/whiteTick.png" alt="" className="w-4 h-4 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* More Benefits */}
              <div className="text-yellow-400 cursor-pointer mb-4">See more benefits -{'>'}</div>

              {/* Join Now Button */}
              <Link to='/payment'>
                <button className="btn w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
                  Join Now
                </button>
              </Link>

            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default MembershipPlans;
