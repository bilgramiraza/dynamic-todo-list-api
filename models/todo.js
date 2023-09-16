const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type:String, required:true },
  status: { type:Boolean, default:false, required:true },
},{ timestamps: true });

todoSchema.virtual('').get(() => {
});

module.exports = mongoose.model('todo', todoSchema);
