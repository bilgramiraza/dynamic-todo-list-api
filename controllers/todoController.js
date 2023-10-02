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

const toggleTodoStatus= async (req, res) => {
  try{
    const todo = await Todo.findById(req.params.todoId).exec();

    if(todo === null) return res.status(204).json();

    todo.status = !todo.status;

    await todo.save();

    const formattedTodo = { 
      id:todo._id,
      title:todo.title,
      status:todo.status 
    };

    return res.status(200).json({ message:'Todo Status Toggled', todo:formattedTodo }); 
  }catch(err){
    return res.status(500).json(err);
  }
};

const modifyTodo= async (req, res) => {
  try{
    const todo = await Todo.findById(req.params.todoId).exec();

    if(todo === null) return res.status(204).json();

    todo.title= req.body.title;//Modify This when we need to modify more than a single property

    await todo.save();

    const formattedTodo = { 
      id:todo._id,
      title:todo.title,
      status:todo.status 
    };

    return res.status(200).json({ message:'Todo Title Modified', todo:formattedTodo }); 
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
