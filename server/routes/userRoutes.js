const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user'); // Importing User model from '../models/user'
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  try {
    const registeredUser = await User.register(user, password); // Registering a new user
    passport.authenticate('local')(req, res, () => {
      // Authenticating the user
      res.cookie('sessionID', req.sessionID, { httpOnly: true }); // Setting session ID cookie
      res.status(200).json(user); // Sending user data as JSON response
    });
  } catch (err) {
    res.status(500).json(err); // Handling errors
  }
});

// Creating a JSON web token for logging in
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = User({ username, password });
  req.login(user, (err) => {
    // Logging in the user
    if (err) {
      return res.status(500).json('Wrong!');
    }
    passport.authenticate('local')(req, res, () => {
      // Authenticating the user
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET); // Creating a JSON web token
      // Should return { httpOnly: true } when in deployed
      res.status(200).cookie('token', token,{maxAge:1000*60*60, httpOnly:true, sameSite:'None',domain:'gorgeous-malasada-98352a.netlify.app'}).json('Success'); // Sending token and user data as JSON response
    });
  });
});

router.get('/logout', (req, res) => {
  req.logout(req.user, (err) => {
    // Logging out the user
    if (err) return next(err); // Handling errors
    res.status(200).json('Logged out'); // Sending 'Logged out' message as JSON response
  });
});

module.exports = router; // Exporting router for use in other files
