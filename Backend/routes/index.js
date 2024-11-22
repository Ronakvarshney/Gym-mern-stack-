const express = require('express');
const { SignupController, LoginController, ProfileController } = require('../controllers/auth');
const { auth } = require('../middleares/Auth');
const { ContactController } = require('../controllers/ContactController');
const { DashboardController } = require('../controllers/DashboardController');
const verifyToken = require('../controllers/verifytoken');

const { paymentController } = require('../controllers/PaymentController');

const router = express.Router();  // Corrected this line

router.post('/api/register', SignupController);
router.post('/api/login' , LoginController)
router.post('/contact' ,verifyToken, ContactController)
router.get('/dashboard' , verifyToken , DashboardController)
router.post('/createprofile' , verifyToken , ProfileController)
router.post('/payment', verifyToken ,paymentController)

module.exports = router;
