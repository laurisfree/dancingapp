const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    // check and verify JWT token
    if (token && jwt.verify(token, process.env.JWT_SECRET)) {
      req.user = jwt.decode(token); // attach decoded token to req object
      next();
    } else {
      next();
    }
  }

module.exports = checkToken