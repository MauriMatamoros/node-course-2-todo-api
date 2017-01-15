const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '587a5ba53b068ddf156ccc2e1';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({// finds all the todos matching
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({// return the first one that matches
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => { //finds by ID only
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => {
//   console.log(e);
// });
var userId = '587910e2067c24de13313577';
User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by id', user);
}).catch((e) => {
  console.log(e);
});
