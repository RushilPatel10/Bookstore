const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  Genre:{
    type: String,
    required: true
  },

});

const userDB = mongoose.model('userTbl',userSchema);
module.exports = userDB