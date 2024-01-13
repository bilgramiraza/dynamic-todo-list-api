const { body, validationResult, param } = require('express-validator');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');

//Middleware to handle validation errors and send a 400 response if validation fails.
//It formats validation errors and sends them as a JSON response.
function handleValidationErrors (req, res, next){
  const errorObject = validationResult(req).formatWith(({msg})=>msg).mapped();
  if(Object.keys(errorObject).length>0) return res.status(400).json(errorObject);
  return next();
}

const authMiddleware = [
  passport.authenticate('jwt', { session:false }),
];

const uniqueEmailCheck = async (value)=>{
  const foundEmail = await User.exists({ email:value }).exec();
  if(foundEmail) throw new Error('Email already in use by another account');
  return true;
};

const validateUsername = async (value, { req })=>{
  if(req.user && value === req.user.username) return true;

  const foundUser = await User.exists({ username:value }).exec();
  if(foundUser) throw new Error('Username Taken, Please choose a Different One');
  return true;
}

const loginValidation = [
  body('username', 'Username Cannot be Blank').trim().isLength({ min:1 }).escape(),
  body('password', 'Password Cannot be Blank').trim().isLength({ min:8 }).escape(),
];

const registerValidation = [
  body('email', 'Email Cannot be Blank').trim().isEmail().withMessage('Invalid Email').escape().custom(uniqueEmailCheck),
  body('username', 'Username Cannot be Blank').trim().isLength({ min:1 }).escape().custom(validateUsername),
  body('password', 'Password Cannot be Blank').trim().isLength({ min:8 }).escape(),
];

const modifyUserValidation = [
  body('username', 'Username Cannot be Blank').trim().isLength({ min:1 }).escape().custom(validateUsername),
];

const passwordResetValidation = [
  body('oldPassword', 'Old Password Cannot be Blank').trim().isLength({ min:8 }).escape(),
  body('newPassword', 'New Password Cannot be Blank').trim().isLength({ min:8 }).escape(),
];

const todoValidation = [
  body('title', 'Empty Title').trim().isLength({ min:1 }).escape(),
];

const todoIdCheck = (value) => {
  if(!mongoose.Types.ObjectId.isValid(value)) throw new Error('Invalid Id');
  return true;
};

const todoIdValidation = [
  param('todoId', 'Invalid Id').trim().escape().custom(todoIdCheck),
];

module.exports={
  todoValidation,
  todoIdValidation,
  handleValidationErrors,
  authMiddleware,
  loginValidation,
  registerValidation,
  modifyUserValidation,
  passwordResetValidation,
};
