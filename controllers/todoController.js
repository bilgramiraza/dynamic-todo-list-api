const Todo = require('../models/todo');

const getAllTodos= (req, res, next) => {
  res.send('NOT IMPLEMENTED: getAlltodo Route');
};

const getTodoById= (req, res, next) => {
  res.send('NOT IMPLEMENTED: getTodoById Route');
};

const addTodo= (req, res, next) => {
  res.send('NOT IMPLEMENTED: addTodo Route');
};

const toggleTodoStatus= (req, res, next) => {
  res.send('NOT IMPLEMENTED: toggleTodoStatus Route');
};

const modifyTodo= (req, res, next) => {
  res.send('NOT IMPLEMENTED: modifyTodo Route');
};

const deleteTodo= (req, res, next) => {
  res.send('NOT IMPLEMENTED: deleteTodo Route');
};

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  toggleTodoStatus,
  modifyTodo,
  deleteTodo,
};
