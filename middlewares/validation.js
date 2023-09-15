const { body, validationResult } = require('express-validator');

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
  body('title', 'Empty Title').trim().escape(),
  validationObject,
];

module.exports={
  todoValidation,
};
