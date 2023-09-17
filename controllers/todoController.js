const Todo = require('../models/todo');

const getAllTodos= async (req, res) => {
  try{
    const todos = await Todo
      .find({})
      .select('title status')
      .sort({ createdAt:'descending' })
      .exec();
    const statusCode = todos.length?200:204;
    const formattedTodos = todos.map(todo => ({ 
      id:todo._id,
      title:todo.title,
      status:todo.status 
    }));
    return res.status(statusCode).json(formattedTodos);
  }catch(err){
    return res.status(500).json(err);
  }
};

const getTodoById= async (req, res) => {
  try{
    if(req.errorObject) return res.status(204).json();
    
    const todo = await Todo
      .findById(req.params.todoId)
      .select('title status')
      .exec();

    if(!todo) return res.status(204).json();

    const formattedTodo = { 
      id:todo._id,
      title:todo.title,
      status:todo.status 
    };
    return res.status(200).json(formattedTodo); 
  }catch(err){
    return res.status(500).json(err);
  }
};

const addTodo= async (req, res) => {
  if(req.errorObject) return res.status(400).json({ message:req.errorObject });
  try{
    const newTodo = new Todo({
      title:req.body.title,
    });
    await newTodo.save();
    return res.status(201).json({ message:'Todo Created Successfully' });
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
