const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { 
  authMiddleware, 
  loginValidation, 
  registerValidation, 
  modifyUserValidation, 
  handleValidationErrors,
} = require('../middlewares/validation');

router.post('/', loginValidation, handleValidationErrors, userController.login);
router.post('/register', registerValidation, handleValidationErrors, userController.register);

router.get('/me', authMiddleware, handleValidationErrors, userController.currentUser);
router.post('/me', authMiddleware, modifyUserValidation, handleValidationErrors, userController.modifyUser);
router.delete('/me', authMiddleware, handleValidationErrors, userController.deleteUser);

module.exports = router;
