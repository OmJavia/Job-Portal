const jwt = require('jsonwebtoken');

// Secret key for verifying the token
const SECRET = "secret";

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']; // Expecting token in the Authorization header
    
    if (!token) {
        return res.status(403).json({ message: 'No token provided!' });
    }
    
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
        return res.status(401).json({ message: 'Invalid or expired token!' });
        }
        req.user = decoded; // Attach decoded payload to the request object
        
        next(); // Proceed to the next middleware or route handler
    });
    }

module.exports = verifyToken;