const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  title: String,
  status: Boolean,
},{ timestamps: true });

todoSchema.virtual('').get(() => {
});

module.exports = mongoose.model('todo', todoSchema);
