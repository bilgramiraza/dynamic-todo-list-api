const { body, validationResult, param } = require('express-validator');
const mongoose = require('mongoose');

//Middleware to handle validation errors and send a 400 response if validation fails.
//It formats validation errors and sends them as a JSON response.
function handleValidationErrors (req, res, next){
  const errorObject = validationResult(req).formatWith(({msg})=>msg).mapped();
  if(Object.keys(errorObject).length>0) return res.status(400).json(errorObject);
  return next();
}

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
};
