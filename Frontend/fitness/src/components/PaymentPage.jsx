import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const PaymentPage = () => {
    // State to manage form inputs
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        amount: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const token = useSelector((state)=>state.token.value)
    console.log('token' , token)
    // Handle form submission
    const handleSubmit = async (e) => {
       
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost:3000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
                },
               
                body: JSON.stringify(formData),
              
            })
            if(!response.ok){
                window.alert('error occurs')
            }
            const data = await response.json()
            window.alert('plan added successfully')
            navigate('/')
        }
        catch (error) {
            console.log(error.message)
            window.alert(error)

        }
        // Perform payment processing here
    };

    return (
        <> 
        <Navbar />
        {
            token ? 
            <div className="payment-page-container bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <div className="payment-form bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
                {/* Payment Header */}
                <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
                    Complete Your Payment
                </h1>

                {/* Input Fields */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name" 
                            name = 'name'
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name = 'email'
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Card Details */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="cardNumber"
                        >
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name = 'cardNumber'
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </div>

                    <div className="flex space-x-4">
                        {/* Expiry Date */}
                        <div className="w-1/2">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="expiry"
                            >
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiry"
                                name = 'expiry'
                                value={formData.expiry}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="MM/YY"
                                required
                            />
                        </div>

                        {/* CVV */}
                        <div className="w-1/2">
                            <label
                                className="block text-sm font-medium mb-1"
                                htmlFor="cvv"
                            >
                                CVV
                            </label>
                            <input
                                type="password"
                                id="cvv"
                                name = 'cvv'
                                value={formData.cvv}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="123"
                                required
                            />
                        </div>
                    </div>

                    {/* Amount */}
                    <div>
                        <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="amount"
                        >
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name= 'amount'
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter the amount"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div> :
       <div className='flex flex-col items-center justify-center w-full h-full'>
       <h3>Please Login TO Buy A Course</h3>
       <img src='src/assets/8060931.webp' className='w-96 ' /> </div>
        }
            
          
            <Footer />
        </>
    );
};

export default PaymentPage;
