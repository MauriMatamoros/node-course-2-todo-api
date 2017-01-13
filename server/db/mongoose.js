const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //This way mongoose can use promises (not third party)
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
