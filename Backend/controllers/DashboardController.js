
const User = require("../models/User");

exports.DashboardController = async (req, res) => {
  // Assuming the user ID is stored in req.user._id after decoding the JWT

  try {
    // Assuming ID is stored in req.payload from JWT
    const userid = req.user?.userId ;
   // Ensure this matches the JWT decoding process
if (!userid) {
    return res.status(401).json({
        success: false,
        message: "User ID not found in request. Please log in.",
    });
}

    // Find user and populate the profile field
    const user = await User.findById(userid).populate("profile").populate("payment");
    console.log(user)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
   
    // Render dashboard with user data
     res.json({
        success : true ,
        user ,
       
     })
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while fetching user data",
    });
  }
};
