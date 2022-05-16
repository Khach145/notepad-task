const mongoose = require('mongoose');

const sessionModel = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    id: {
        type: Number,
        auto: true
    },
    date: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('sessions', sessionModel)