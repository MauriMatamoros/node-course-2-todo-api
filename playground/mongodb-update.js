const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5878271d2e603c71d9927225')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('587799a57a96281125e6065a')
  },{
    $set: {
      name: 'Mauricio'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  // db.close();
});
