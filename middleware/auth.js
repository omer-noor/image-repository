const jwt = require("jsonwebtoken");

//Middleware to authenticate the jwt token
module.exports = function(req, res, next) {
    console.log(req.query.token)
    const token = req.query.token;
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
        const decoded = jwt.verify(token, "randomString");
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
};