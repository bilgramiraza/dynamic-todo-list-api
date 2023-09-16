const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');
const { todoValidation } = require('../middlewares/validation');

/*TODOS API Routes*/
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);

router.post('/', todoValidation, todoController.addTodo);

router.patch('/:id', todoController.toggleTodoStatus);

router.put('/:id', todoValidation, todoController.modifyTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;
