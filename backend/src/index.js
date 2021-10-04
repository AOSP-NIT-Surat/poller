const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();
const app = express();

async function mongoConnect() {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected"))
}

mongoConnect();
app.get("/", (req, res) => {
    res.json({"message" : "this is working"})
})

const port = process.env.PORT || 6969
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
