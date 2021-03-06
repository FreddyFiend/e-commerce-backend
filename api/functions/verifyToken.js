require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const bearerHeaders = req.headers["authorization"];
  if (bearerHeaders !== "undefined") {
    const bearerToken = bearerHeaders.split(" ")[1];
    jwt.verify(bearerToken, process.env.SECRET_JWT_KEY, (err, authData) => {
      if (err)
        return res.json({
          message: "error occured at verification",
          success: false,
        });
      req.authData = authData;
      next();
    });
  }
}
module.exports = verifyToken;
