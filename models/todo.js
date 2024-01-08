const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type:String, required:true },
  status: { type:Boolean, default:false, required:true },
  user: { type:Schema.Types.ObjectId, ref:'user', required:true}
},{ timestamps: true });

// todoSchema.virtual('').get(() => {
// });

module.exports = mongoose.model('todo', todoSchema);
