var mongoose = require('mongoose');

var EdiSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Edi', EdiSchema);