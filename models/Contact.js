var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Contact = mongoose.model('contact', ContactSchema)