const mongoose = require('mongoose');

const pageModel = new mongoose.Schema({
    sessionId: {
        required: true,
        type: String
    },
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

module.exports = mongoose.model('pages', pageModel)