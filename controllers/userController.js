const User = require('../models/user'); 
const Todo = require('../models/todo');

const login = async (req, res) =>{
  const { username, password } = req.body;
  try{
    const foundUser = await User.findOne({ username }).exec();
    if(!foundUser)
      return res.status(404).send({ message:'User not found' });

    const comparePassword = await foundUser.comparePassword(password)
    if(!comparePassword)
      return res.status(401).send({ message:'Invalid Password' });

    const token = foundUser.genAuthToken();
    return res.status(200).json({ message:'User Login Successful', token });
  }catch(err){
    return res.status(500).send(err);
  }
};

const register = async (req, res)=>{
  try{
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({ message:'Registration Successful' });
  }catch(err){
    return res.status(500).send(err);
  }
};

const currentUser = async (req, res)=>{
  try{
    const foundUser = await User.findById(req.user.id).select('username email').lean().exec();
    const user = {
      username:foundUser.username,
      email:foundUser.email,
    };
    return res.status(200).send({ user });
  }catch(err){
    return res.status(500).send(err);
  }
};

const modifyUser = async (req, res)=>{
  try{
    const { username } = req.body;
    await User.findByIdAndUpdate(req.user.id, { username }, { new:true });
    return res.status(201).json({ message:'User Info Updated' });
  }catch(err){
    return res.status(500).send(err);
  }
};

const deleteUser = async (req, res)=>{
  try{
    const deletedUser = await User.findByIdAndDelete(req.user.id);
    if(!deletedUser)  res.status(404).send({ message:'User Not Found' });
    await Todo.deleteMany({ user:deletedUser._id });
    return res.status(204).json({ message:'User Deletion Successful' });
  }catch(err){
    return res.status(500).send(err);
  }
};

module.exports = {
  login,
  register,
  currentUser,
  modifyUser,
  deleteUser,
};
