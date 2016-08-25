var mongoose = require('mongoose');

var GeographySchema = new mongoose.Schema({
  name: String
});

mongoose.model('Geography', GeographySchema);