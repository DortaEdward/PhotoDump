const express = require('express');
const router = express.Router();

const Users = require('../db/models/userModel');

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json({status: 200, user: req.user});
  } catch (error) {
    next(error);
  }
});

module.exports = router;