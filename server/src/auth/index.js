const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { 
  createJWT,
  validateRegister,
  validateLogin,
} = require('../utils');

const Users = require('../db/models/userModel');

router.post('/signup', async (req, res, next) => {
  try {
    const validBody = await validateRegister(req.body);
    if(validBody){
      const userData = req.body;
      const saltRound = 10;
      const salt = bcrypt.genSaltSync(saltRound);
      userData.password = bcrypt.hashSync(userData.password, salt);
      const user = await Users.create(userData);
      await user.save();
      res
        .status(200)
        .json({
          status: res.statusCode,
          message: 'User Created 🍻'
        })
    } else {
      const error = new Error('Invalid Values');
      next(error);
    }
  } catch (error) {
    console.log(error);
    next(error);
  };
});

router.post('/login', async (req, res, next) => {
  try {
    const validLogin = await validateLogin(req.body);
    const user = await Users.findOne({email:req.body.email});
    if(validLogin && user){
      const validPassword = await bcrypt.compareSync(req.body.password, user._doc.password);
      if(validPassword){
        console.log('Creating Json Web Token')
        delete user._doc.password;
        createJWT(user,res);
      } else {
        const error = new Error('Invalid Credentials');
        res.status(400);
        next(error);
      }
    } else {
      const error = new Error('Invalid Credentials');
      res.status(400);
      next(error);
    }
  } catch (error) {
    next(error.message);
  }
})

// update user

// delete user
router.delete('/delete/:id', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = await Users.findById(userId);
    if(user){
      if(user._doc.admin || user._doc.id === req.params.id){
        await Users.findByIdAndDelete(req.params.id);
        res
          .status(200)
          .json({
            status:res.statusCode,
            message:'User Deleted'
          })
      } else {
        const error = new Error('Unauthorized');
        res.status(500);
        next(error);
      }
    } else {
      const error = new Error('Unauthorized');
      res.status(500);
      next(error);
    }
  } catch (error) {
    next(error);
  }
})


module.exports = router;