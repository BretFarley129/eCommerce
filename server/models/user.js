var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first: {type: String, required: true, minlength: 3},
    last: {type: String, required: true, minlength: 3},
    email: {type: String, required: true, minlength: 5},
    password: {type: String, required: true},
    admin: {type: Boolean, required: true},
}, {timestamps: true})

mongoose.model('User', UserSchema); 
var User = mongoose.model('User');