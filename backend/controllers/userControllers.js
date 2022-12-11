const User = require("../models/user.model")

exports.signUpUser = (req, res) => {
  res.sendStatus(200)
 
};


exports.loginUser = (req, res) => {
  res.sendStatus(200)

  // if (req.body.email && req.body.password) {
  //   // check if user is in array of users
  //   const foundUser = User.find(
  //     req.body.email && user.password === req.body.password
  //   );
  //   if (foundUser) {
  //     // create JWT token with id, name and avatar
  //     const jwtToken = jwt.sign(
  //       { id: foundUser.id, name: foundUser.name, avatar: foundUser.avatar },
  //       JWT_SECRET
  //     );
  //     // send response with JWT token
  //     res.json({
  //       message: 'login success',
  //       token: jwtToken,
  //     });
  //   } else {
  //     res.status(401).send('not a valid user');
  //   }
  // } else {
  //   res.status(400).send('please provide an email and password');
  // }
};