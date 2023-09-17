const Todo = require('../models/todo');

const getAllTodos= async (req, res) => {
  try{
    const todos = await Todo
      .find({})
      .sort({ createdAt:'descending' })
      .exec();
    const statusCode = todos.length?200:204;
    return res.status(statusCode).json(todos);
  }catch(err){
    return res.status(500).json(err);
  }
};

const getTodoById= (req, res) => {
  try{

  }catch(err){
    return res.status(500).json(err);
  }
};

const addTodo= (req, res) => {
  try{

  }catch(err){
    return res.status(500).json(err);
  }
};

const toggleTodoStatus= (req, res) => {
  try{

  }catch(err){
    return res.status(500).json(err);
  }
};

const modifyTodo= (req, res) => {
  try{

  }catch(err){
    return res.status(500).json(err);
  }
};

const deleteTodo= (req, res) => {
  try{

  }catch(err){
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  toggleTodoStatus,
  modifyTodo,
  deleteTodo,
};
