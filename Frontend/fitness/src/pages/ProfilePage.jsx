import React from 'react'
import { useState } from 'react';
import { useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Ensure valid email format
    phone: '',
    address: '',
    dob: '',
    gender: '',
  });
  console.log(formData)
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const token = useSelector((state)=>state.token.value)
  console.log('token' , token)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const response = await fetch('http://localhost:3000/createprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok && data.success) {
          setFormData(formData.name = data.username)
          console.log(data.username)
          window.alert("Your profile Updated!");
          navigate('/dashboard');
        } else {
          window.alert(data.message || "Something went wrong.");
        }
      } else {
        console.log('No token available for authentication.');
      }
    } catch (error) {
      window.alert(error.message);
      console.log("Error:", error.message);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400 uppercase drop-shadow-lg">
        Your Profile
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 uppercase border-b-4 border-yellow-400 text-yellow-400">
          Personal Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
             
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
           
            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {message && <p className="text-yellow-400 mt-4">{message}</p>}

          <div className="flex space-x-4 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default ProfilePage