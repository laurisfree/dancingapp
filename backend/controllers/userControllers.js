const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

exports.loginUser = async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const foundUser = await User.findOne({ email: req.body.email, password: req.body.password })
      if (foundUser) {
        // create JWT token with id, name and avatar
        const jwtToken = jwt.sign(
          { id: foundUser.id, name: foundUser.name, passesBought: foundUser.passesBought, passesUsed: foundUser.passesUsed},
          process.env.JWT_SECRET
        );
        // send response with JWT token
        res.json({
          message: 'login success',
          token: jwtToken,
        });
      } else {
        res.status(401).send('not a valid user');
      }
    } else {
      res.status(400).send('please provide an email and password');
    }
  } catch (error) {
    res.status(500).send('error in login user')
  }
};

exports.getUserProfile = async (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  }
};

exports.buyPass = async (req, res) => {
  try {
    await User.updateOne({ _id: mongoose.Types.ObjectId(req.user.id) }, { $inc: { passesBought:  req.body.numberOfPasses} })
    res.sendStatus(201)

  } catch (error) {
    console.log(error)
  }
};


exports.getPassInfo = async (req, res) => {
  try {
    const { passesBought, passesUsed} = await User.findOne({ _id: mongoose.Types.ObjectId(req.user.id) })
    res.json({ passesBought, passesUsed});

  } catch (error) {
    console.log(error)
  }
};