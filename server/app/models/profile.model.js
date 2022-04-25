const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profile = new Schema({
    id: {type: String, unique: true, require: true},
    fieldOne: {type : String},
    fieldTwo: {type : String},
    fieldThree: {type : String},
    fieldFour: {type : String},
    fieldFive: {type : String},
    fieldSix: {type : String},
});

module.exports = mongoose.model('profile', profile);