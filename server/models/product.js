var mongoose = require('mongoose');

//Cap signifies capitalized and singular
//MAKE SURE TO CHANGE FILE NAMES

var CapSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    text: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true},
    birthday: {type: Date, required: true},
}, {timestamps: true})

mongoose.model('Cap', CapSchema); 
var Cap = mongoose.model('Cap');