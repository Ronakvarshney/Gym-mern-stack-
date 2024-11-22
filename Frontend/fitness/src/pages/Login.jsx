import React, { useState } from 'react';
import { updateToken } from '../store/slices/TokenSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [logindata, setLogindata] = useState({
    email: '',
    password: ''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(logindata);

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logindata),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log(data)
      if (data.success) {
        console.log('login successful');
        if (data.token) {
          const token = data.token;

          // Dispatch token to Redux
          dispatch(updateToken(token));

          // Optionally save token to localStorage for persistence
          

          // Navigate to Contact page after login
          navigate('/contact');
        } else {
          window.alert(data.message);
        }
      } else {
        window.alert(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.log('Error occurs while connecting to backend');
      window.alert('An error occurred while connecting to the server.');
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <div className="bg-gray-800 flex items-center justify-center min-h-screen">
      <img src='src/assets/male-web-developer-doing-research-on-development-illustration-download-in-svg-png-gif-file-formats--thinking-researching-and-pack-design-illustrations-4759504.webp'  />
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-10 py-4">LOGIN PAGE ✍️</h2>

        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-6">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={logindata.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="mb-16">
            <label htmlFor="password" className="block text-white font-semibold mb-4">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={logindata.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
        <span className='text-center text-orange-300'>If not Registered Go to <a href='/signup' className='text-blue-700'>signup</a></span>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default Login;
