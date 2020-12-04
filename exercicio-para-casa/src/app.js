const express = require("express")
const app = express()
const router = require("./routes/gamesRoute")

app.use("/",router)



module.exports = app