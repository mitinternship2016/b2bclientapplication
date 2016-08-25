var mongoose = require('mongoose');

var BackendSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Backend', BackendSchema);