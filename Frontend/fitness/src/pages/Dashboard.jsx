import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from './Calender';

export default function Dashboard() {
  const [dataform, setdataform] = useState(null); // State to hold user data
  
  // Get token from redux store
  const token = useSelector((state) => state.token.value);

  // Fetch dashboard data
  const fetchdata = async () => {
    try {
      const response = await fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include', // Send cookies if any
      });

      const data = await response.json(); // Parse JSON response

      if (data.success) {
        setdataform(data.user); // Assuming data is in 'data' field
      } else {
        // Handle login failure
        console.log(data.message);
      }
    } catch (error) {
      console.log('Error occurred while connecting to backend');
      console.log(error.message);
    }

    console.log(dataform)
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchdata();
  }, [token]); // Adding token as a dependency to re-fetch on token change

  // Display user data from state
  console.log(dataform);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-yellow-400 tracking-wider uppercase drop-shadow-lg">
        Your Dashboard
      </h1>

      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Personal Information Section */}
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-pink-400 mb-4 uppercase border-b-4 border-pink-400 inline-block tracking-wide">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p><strong>Name:</strong> {dataform?.name || 'Loading...'}</p>
              <p><strong>Email:</strong> {dataform?.email || 'Loading...'}</p>
              <p><strong>Phone:</strong> {dataform?.profile.phone || 'Loading...'}</p>
            </div>
            <div>
              <p><strong>Address:</strong> {dataform?.profile.address || 'Loading...'}</p>
              <p><strong>Date of Birth:</strong> {dataform?.profile.dateofBirth || 'Loading...'}</p>
              <p><strong>Gender:</strong> {dataform?.profile.gender || 'Loading...'}</p>
            </div>
          </div>
        </div>

        {/* Membership Details Section */}
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-green-400 mb-4 uppercase border-b-4 border-green-400 inline-block tracking-wide">
            Membership Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p><strong>Plan:</strong> {dataform?.membershipPlan || 'Loading...'}</p>
              <p><strong>Start Date:</strong> { '15-11-2024' || 'Loading...'}</p>
              <p><strong>Expiration Date:</strong> { '15-12-2024' || 'Loading...'}</p>
            </div>
            <div>
              <p><strong>Next Renewal:</strong> {dataform?.nextRenewal || 'Loading...'}</p>
              <p><strong>Trainer Assigned:</strong> {dataform?.trainer || 'Loading...'}</p>
              <p><strong>Current Status:</strong> {dataform?.status || 'Loading...'}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 uppercase border-b-4 border-blue-400 inline-block tracking-wide">
            Fitness Goals
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Lose 10 pounds by March 2024</li>
            <li>Increase bench press to 100 kg</li>
            <li>Run a 5k in under 25 minutes</li>
          </ul>
        </div>

        {/* Exercise History Section */}
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-purple-400 mb-4 uppercase border-b-4 border-purple-400 inline-block tracking-wide">
            Recent Workouts
          </h2>
          <table className="w-full table-auto text-gray-300">
            <thead>
              <tr className="text-left border-b border-gray-600">
                <th className="p-2 uppercase">Date</th>
                <th className="p-2 uppercase">Workout</th>
                <th className="p-2 uppercase">Duration</th>
                <th className="p-2 uppercase">Calories Burned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">01/11/2024</td>
                <td className="p-2">Full Body</td>
                <td className="p-2">1 hr</td>
                <td className="p-2">500</td>
              </tr>
              <tr>
                <td className="p-2">02/11/2024</td>
                <td className="p-2">Cardio & Abs</td>
                <td className="p-2">45 mins</td>
                <td className="p-2">400</td>
              </tr>
              <tr>
                <td className="p-2">03/11/2024</td>
                <td className="p-2">Legs & Glutes</td>
                <td className="p-2">1 hr 15 mins</td>
                <td className="p-2">600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Calendar/>

        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4 uppercase border-b-4 border-yellow-400 inline-block tracking-wide">
            Progress Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            <img src="src/assets/exercises/il_794xN.4342789397_ngbz.webp" className="rounded-lg object-cover h-42 w-full" />
            
          </div>
        </div>

        {/* Other Sections */}
        {/* Exercise History, Goals, etc. */}
      </div>
    </div>
  );
}
