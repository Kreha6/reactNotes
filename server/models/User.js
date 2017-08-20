var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
  user: {
    login:  String,
    password: String
  },
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);
