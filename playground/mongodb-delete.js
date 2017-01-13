const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

//deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });
//deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

//findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

// db.collection('Users').deleteMany({name: 'Juan'}).then((res) => {
//   console.log(res);
// });
// db.collection('Users').findOneAndDelete({
//   _id: ObjectID('587797104d95a111103c9aa0')
// }).then((res) => {
//   console.log(res);
// });

  // db.close();
});
