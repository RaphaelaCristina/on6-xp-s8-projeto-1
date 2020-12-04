const app = require("./src/app")

const PORT = 3001

const router = require("./src/routes/gamesRoute")

app.listen(PORT, function (){
    console.log("O Nosso app esta rodando na porta " + PORT)
})

app.use("/",router)

module.exports = app