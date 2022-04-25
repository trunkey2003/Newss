const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tracking = new Schema({
    url: {type: String, required: true},
    isUser: {type: Boolean, default: false},
}, { timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('tracking', tracking);