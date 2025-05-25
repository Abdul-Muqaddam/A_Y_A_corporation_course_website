const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    uname:{type:String},
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true }

});

module.exports = mongoose.model('User', userSchema);