const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
	email : {
		type: String,
		require : true,
		min : 6
	}
})

module.exports = mongoose.model('Email', emailSchema);