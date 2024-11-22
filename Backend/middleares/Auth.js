const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      console.log("token" , token)
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "token not find",
        });
      }
      try {
        const response = jwt.verify(token, "ronak"); // Make sure secret key matches
        const rootuser = await User.findOne({_id : response._id})
        if(!rootuser){
            return res.json({
                success : false ,
                message : "user not found"
            })
        }
        req.token = token ;
        req.payload = response;
        req.userID = rootuser._id;
        
      } catch (error) {
        console.log("JWT Verification Error:", error.message); // Log specific error
        return res.status(401).json({
          rootuser ,
          success: false,
          message: "token is invalid or expired",
        });
      }
  
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "something wrong while validating authentication",
        err: error,
      });
    }
  };