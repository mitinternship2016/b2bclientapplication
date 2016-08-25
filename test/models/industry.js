var mongoose = require('mongoose');

var IndustrySchema = new mongoose.Schema({
  name: String
});

mongoose.model('Industry', IndustrySchema);