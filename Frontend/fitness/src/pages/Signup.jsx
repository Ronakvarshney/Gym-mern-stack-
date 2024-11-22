import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate(); 
  const [signupdata, setSignupData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // For now, log the form data
    // Here, you could send `signupdata` to your backend for further processing
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupdata)
      })
      const data = await response.json(); // Parse the JSON response

      if (data.success) {
         
        navigate('/login'); // Redirect to the home page
      } else {

        // Handle login failure
        console.log(data.message);
      }
    }
    catch (error) {
      console.log('error occurs while connecting to backend');
      console.log(error.message)
    }

  };

  const handleChange = (e) => {
    setSignupData({
      ...signupdata,
      [e.target.name]: e.target.value
    });
  };



  return (



    <div className="bg-gray-800 flex items-center justify-center min-h-screen relative overflow-hidden">
      <img src='/src/assets/man-working-on-responsive-web-development-illustration-download-in-svg-png-gif-file-formats--website-design-pack-illustrations-4759506.webp' alt ='image' />
      <div className="w-full max-w-md bg-gray-900  rounded-lg shadow-lg p-8 fade-in relative z-10 ml-10">
        <h2 className="text-3xl font-bold text-white mb-6">
          Create New Account 👏
        </h2>
        <p className="text-sm text-white mb-4">
          Fill Details to Create a New Account.
        </p>

        <form onSubmit={submitHandler} className="space-y-14 mt-14">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              id="name"
              name="fullname"
              value={signupdata.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupdata.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupdata.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105"
            >
              Create Account
            </button>
          </div>

          <p className="text-sm text-center text-orange-300 mt-4">
            Already have an account?
            <a href="/login" className="text-blue-500 hover:underline">Sign In</a>
          </p>
        </form>
      </div>
    </div>





  );
};

export default Signup;
