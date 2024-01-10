const User = require('../models/user'); 

const login = async (req, res) =>{
  if(req.errorObject) 
    return res.status(400).send({ message:req.errorObject });

  const { username, password } = req.body;
  try{
    const foundUser = await User.findOne({ username }).exec();
    if(!foundUser)
      return res.status(404).send({ message:'User not found' });

    const comparePassword = await foundUser.comparePassword(password)
    if(!comparePassword)
      return res.status(401).send({ message:'Invalid Password' });

    const token = foundUser.genAuthToken();
    return res.status(200).json({ message:'User Log In Successful', token });
  }catch(err){
    return res.status(500).send(err);
  }
};

const register = async (req, res)=>{
  if(req.errorObject)
    return res.status(400).send({ message:req.errorObject });
  try{

  }catch(err){
    return res.status(500).send(err);
  }
};

const currentUser = async (req, res)=>{
  if(req.errorObject)
    return res.status(400).send({ message:req.errorObject });
  try{

  }catch(err){
    return res.status(500).send(err);
  }
};

const modifyUser = async (req, res)=>{
  if(req.errorObject)
    return res.status(400).send({ message:req.errorObject });
  try{

  }catch(err){
    return res.status(500).send(err);
  }
};

const deleteUser = async (req, res)=>{
  if(req.errorObject)
    return res.status(400).send({ message:req.errorObject });
  try{

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
