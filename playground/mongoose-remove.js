const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//Todo.remove({}) this removes all

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove();//returns the object but removes it from the data base
Todo.findByIdAndRemove('587bf87da864d357e938932e').then((todo) => {// also returns the object
  console.log(todo);
});
