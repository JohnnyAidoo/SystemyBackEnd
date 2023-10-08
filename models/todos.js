const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  auther: { type: String, required: true },
  todoList: { type: Array },
});
