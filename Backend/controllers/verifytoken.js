const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided. Authorization denied.",
        });
    }

    try {
        const decoded = jwt.verify(token, 'ronak'); // Use your secret key
        req.user = { userId: decoded.userId };
        req.name = {username : decoded.name};
        req.email = {useremail : decoded.email} // Attach userId to req.user
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Invalid token",
            error: error.message,
        });
    }
};

module.exports = verifyToken;
