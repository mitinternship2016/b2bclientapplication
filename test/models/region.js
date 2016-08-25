var mongoose = require('mongoose');

var RegionSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Region', RegionSchema);