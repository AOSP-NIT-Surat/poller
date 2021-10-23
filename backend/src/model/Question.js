const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    pollId: {
        type: String,
    },
    content: {
        type: String,
    },
    options: [{ type: String }], // List of answer ids
    totalPolls: {
        type: Number,
    },
    result: [{ type: Number }],
});

module.exports = mongoose.model("question", questionSchema);
