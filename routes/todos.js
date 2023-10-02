const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');
const { todoValidation, todoIdValidation, handleValidationErrors } = require('../middlewares/validation');

/*TODOS API Routes*/
router.get('/', todoController.getAllTodos);
router.get('/:todoId',todoIdValidation, handleValidationErrors, todoController.getTodoById);

router.post('/', todoValidation, handleValidationErrors, todoController.addTodo);

router.patch('/:todoId', todoIdValidation, handleValidationErrors, todoController.toggleTodoStatus);

router.put('/:todoId', todoValidation, handleValidationErrors, todoController.modifyTodo);

router.delete('/:todoId', todoIdValidation, handleValidationErrors, todoController.deleteTodo);

module.exports = router;
