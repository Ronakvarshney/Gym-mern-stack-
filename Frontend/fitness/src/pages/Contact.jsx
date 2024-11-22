import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

const Contact = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: '',
  });
  const token = useSelector((state) => state.token.value);
  
  const submithandler = async (e) => {
    e.preventDefault();
    console.log(formdata);
  
    try {
      if (token) {
        const response = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
          },
          body: JSON.stringify(formdata),
        });
  
        const data = await response.json();
  
        if (response.ok && data.success) {
          window.alert("Thanks for contacting us!");
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
  

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div>
      <Navbar/>
      {
        token ? <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4 py-8">
     
        <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
        <p className="text-gray-400 mb-10 text-center max-w-xl">
          Have questions or need help with your fitness journey? Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <form onSubmit={submithandler} 
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-lg space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name = "name" 
              value={formdata.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              value={formdata.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              name='message' 
              value={formdata.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div> : <div className='flex flex-col items-center justify-center w-full h-full'>
        <h3>Please Login and Come Back</h3>
        <img src='src/assets/8060931.webp' className='w-96 ' /> </div>
      }
          <Footer/>
    </div>
    
  );
};

export default Contact;
