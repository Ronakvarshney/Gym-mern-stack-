const user = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


  
const profiles = require('../models/ProfileModel')

exports.SignupController=async(req , res)=>{
    try{
     
    const{fullname , email , password} =req.body ;

    if(!fullname || !email || !password){
        console.log('please fill all credentials')
    }
    let hashpassword ;
    try{
      hashpassword = await bcrypt.hash(password , 10);
    }
    catch(error){
        console.log('error occurs while encrypting' , error.message)

    }
    const response = await user.create({
        name : fullname ,
        email ,
        password : hashpassword
    })
     return res.json({
        success: true,
        message: "signup successful",
        homePageUrl: "http://localhost:5173/home" 
     })

    
    }
    catch(error){
        return res.status(401).json({
            success : false , 
            message : error.message
        })
    }

}

// Adjust this path as needed

exports.LoginController = async function (req, res) {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details carefully",
      });
    }

    // Find user by email
    let useremail = await user.findOne({ email });
    if (!useremail) {
      return res.status(401).json({
        success: false,
        message: "This email is not registered",
      });
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, useremail.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Generate JWT token with userId
    const payload = {
      userId: useremail._id, // Use "userId" for clarity
      email: useremail.email,
      name : useremail.name 
    };
    const token = jwt.sign(payload, 'ronak', { expiresIn: '2h' }); // if password and email match then token have to created

    // Exclude password from the user response object
    useremail = useremail.toObject();
    useremail.password = undefined;
    useremail.token = token ;
    // Set cookie options
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days expiration
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // secure in production
      sameSite: 'strict',
    };

    // Set token in cookie and send response
    res.cookie('token', token, options);
    res.status(200).json({
      success: true,
      token,
      message: "Login successful",
      user: useremail,
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "An error occurred during login",
    });
  }
};

// Ensure necessary imports



exports.ProfileController = async (req, res) => {
    const { gender, dob, address, phone } = req.body;

    // Check if user ID is available from req.user, set by JWT middleware
    const userId = req.user?.userId;
    const username = req.name?.username ;
    const useremail = req.email?.useremail ;
    console.log(userId)
    if (!userId) {
        return res.status(401).json({
            success: false,
            message: "User ID not found in request. Please log in.",
        });
    }

    try {
        // Validate required fields
        if (!gender || !dob || !address || !phone) {
            return res.status(403).json({
                success: false,
                message: "All profile details are required.",
            });
        }

        // Create Profile
        const profiledata = await profiles.create({
            user: userId,
            gender,
            dateofBirth: dob,
            address,
            phone
        });
        await profiledata.populate('user');


        // Optionally, link profile to user model
       const userdata = await user.findByIdAndUpdate(
            userId,
            { profile: profiledata._id },
            { new: true }
        );

        // Send success response to frontend
        res.status(200).json({
            success: true,
            message: "Profile created successfully",
            username ,
            useremail
        });

    } catch (error) {
        console.error("Profile creation error:", error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the profile",
            error: error.message,
        });
    }
};
