var mongoose = require('mongoose');

var ThirdpartySchema = new mongoose.Schema({
  name: String
});

mongoose.model('Thirdparty', ThirdpartySchema);