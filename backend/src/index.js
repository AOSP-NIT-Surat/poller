const express = require("express")
const mongoose = require("mongoose")
const Email = require("./models/emailModel");
const app = express()

async function mongoConnect() {
    await mongoose.connect("mongodb://root:example@127.0.0.1:27017/test")
        .then(() => console.log("Database connected"))
    // await mongoose.connect("mongodb://db:27017/pollerdb")
}
mongoConnect();
app.get("/", (req, res) => {
    res.json({"message" : "this is working"})
})

app.get("/api/email", async (req, res) => {
	// const emailExsist = await Email.findOne({email : req.body.email});
	// if(emailExsist) return res.redirect("/");

	const newEmail = new Email({
		email : "dnskvvs" 
	})

	try{
		const savedEmail = await newEmail.save();
		res.redirect("/");
	}catch(err){
		return res.redirect("/");
	}
})

const port = process.env.PORT || 6969
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))