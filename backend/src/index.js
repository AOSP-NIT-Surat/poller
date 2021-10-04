const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors= require('cors');
const app = express();


app.use(express.json());
app.use(cors());
dotenv.config();


async function mongoConnect() {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected"))
}

mongoConnect();
app.get("/", (req, res) => {
    res.json({"message" : "this is working"})
})

//IMPORTING AUTHENTICATION ROUTE
const authRoute = require('./routes/auth');

//USING THE ROUTES IN EXPRESS
app.use('/api/user',authRoute);

const port = process.env.PORT || 6969
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
