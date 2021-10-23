const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    pollName: {
        type: String,
        required: true,
    },
    pollDescription: {
        type: String,
        default: "",
    },
    createdBy: {
        type: String,
    },
    questions: [{ type: String }],
    timeToActivate: {
        type: BigInt,
    },
    timeToDeactivate: {
        type: BigInt,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    adminPanel: [{ type: String }],
    urlId: {
        type: String,
    },
});

module.exports = mongoose.model("poll", pollSchema);
