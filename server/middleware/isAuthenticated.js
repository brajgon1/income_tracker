const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).send("No Access. No token provided.");
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send("Invalid token.");
    }
}

module.exports = isAuthenticated;