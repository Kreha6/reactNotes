var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
  user: {
    login:  String,
    password: String,
    userId: Number
  },
},{
    collection: 'users'
});
