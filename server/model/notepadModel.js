const mongoose = require("mongoose")

const notepadModel = new mongoose.Schema({
    id: {
        auto: true,
        type: Number
    },
    pageId : {
        required: true,
        type: String
    },
    content : {
        type: Array
    }
})


module.exports = mongoose.model("notepad", notepadModel)