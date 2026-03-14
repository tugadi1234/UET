const mongoose = require('mongoose');

// User Schema definition
const userSchema = new mongoose.Schema({
  FIO: {
    type: String,
    required: true
  },
  Passport_Seria: {
    type: String,  
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  category: { 
    type: Number,
    enum: [1, 2, 3],  
    required: true
  },
  date: {
    type: Date,
    default: Date.now  
  }
});

// Model creation
module.exports = mongoose.model('User', userSchema);