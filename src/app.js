const express = require("express")
const app = express()
const router = require("./route/musicasRoutes")

app.use("/", router)

module.exports = app
