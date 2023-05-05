const jwt = require("jsonwebtoken");

//2 . Verify token
const verifyToken = token => {
  return jwt.verify(token, "anykey", (err, decoded) => {
    // console.log(decoded);
    if (err) {
      return false;
    }
    //return the decoded
    return decoded;
  });
};

module.exports = verifyToken;
