const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName:{type:String, unique: true, required: true},
    password:{type:String, required: true},
    role:{type: Number, required: true, default: 0}, //0 : user, 1 : admin
    avatar:{type: String, default:"https://trunkey2003.github.io/general-img/default-profile-pic.jpg"},
});

module.exports = mongoose.model('user', user);