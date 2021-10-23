const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    questionId: {
        type: String,
        unique: true,
    },
    content: {
        type: String,
    },
    totalPolls: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("answer", answerSchema);
