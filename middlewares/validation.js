const { body, validationResult, param } = require('express-validator');
const mongoose = require('mongoose');

function validationObject(req, res, next){
  //Create an ErrorHandling Object in the format of 
  //{[param]:[msg]}
  //Where 'params' is the input name which failed 
  //validation and msg is the Error Message generated for it

  const errorObject = validationResult(req).formatWith(({msg})=>msg).mapped();
  if(Object.keys(errorObject).length>0) req.errorObject = errorObject;
  return next();
}

const todoValidation = [
  body('title', 'Empty Title').trim().isLength({ min:1 }).escape(),
  validationObject,
];

const todoIdCheck = (value) => {
  if(!mongoose.Types.ObjectId.isValid(value)) throw new Error('Invalid Id');
  return true;
};

const todoIdValidation = [
  param('todoId', 'Invalid Id').trim().escape().custom(todoIdCheck),
  validationObject,
];

module.exports={
  todoValidation,
  todoIdValidation,
};
