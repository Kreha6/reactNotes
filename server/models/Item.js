var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  item: {
    type: String,
    description: String,
    link: String,
    userId: String
  },
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);
