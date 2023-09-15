const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');
const { todoValidation } = require('../middlewares/validation');

/*TODOS API Routes*/
router.get('/', todoValidation, todoController.);

router.post('/', todoValidation, todoController.);

router.patch('/', todoValidation, todoController.);

router.delete('/', todoValidation, todoController.);

module.exports = router;
