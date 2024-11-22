const express = require("express");
const Payment = require("../models/Payment");
const router = express.Router();

// Create a payment record
exports.paymentController = async (req, res) => {
   
  try {
    const userid = req.user?.userId ;
    const {  name, email, cardNumber, expiry, cvv, amount } =
      req.body;

    // Save payment details
    const response = await Payment.create({
      user : userid,
      name,
      email,
      cardNumber,
      expiryDate : expiry,
      cvv,
      amount,
    });
    await response.populate('user')
    res.status(201).json({
      message: "Payment record created successfully!",
      payment: response,
    });
    
  } catch (error) {
    console.error("Error creating payment:", error.message);
    res.status(500).json({ message: "Internal server error", error });
  }
};
