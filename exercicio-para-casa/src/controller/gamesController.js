const { getMaxListeners } = require("../app")
const games = require ("../model/games.json")

const novaListaGames = games.map(games => {
    const novoGame = {
        id: games.id,
        nome: games.name,
        genero: games.genre,
        plataformas: games.platforms,
        capa: games.cover
    }
    return novoGame
})

const getGames = (request,response) =>{
    console.log(request.url)
    response.status(200).send(novaListaGames)

}

const getGamesById = (request, response) => {
    const id = request.params.id
    const games = novaListaGames.find(games => games.id == id)
    if (id !== undefined){
        response.status(200).send(games)
    }else {
        response.status(404).send(console.log("ID nao encontrado"))
    }
}

module.exports = {
    getGames,
    getGamesById
}
