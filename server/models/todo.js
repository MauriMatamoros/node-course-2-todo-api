const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, //this property cannot go blank
    minlength: 1, //minimum length of string
    trim: true //removes empty spaces
  },
  completed: {
    type: Boolean,
    default: false // <- default values
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
};
