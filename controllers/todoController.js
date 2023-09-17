const Todo = require('../models/todo');
const mongoose = require('mongoose');

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

const getTodoById= async (req, res) => {
  try{
    if(req.errorObject) return res.status(204).json();
    
    const todo = await Todo.findById(req.params.todoId).exec();

    if(!todo) return res.status(204).json();

    return res.status(200).json(todo); 
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
