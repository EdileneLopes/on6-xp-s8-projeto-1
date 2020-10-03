//variável que chama a pasta onde está o modelo
const games = require('../models/games.json')

//console.log(games)


 //varável que armazena a maneira como mostrará na tela, em português
//usando o map para cirar um novo array
const novaListaGames = games.map(game => {
    const novoGame = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        capa: game.cover
    }
    return novoGame
})


//fução que faz a busca e retorna os jogos
const getGames = (request, response) => {
    console.log(request.url)
    response.status(200).send(novaListaGames)
}


const outraListaGames = games.map(game => {
    const listaNova = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataformas: game.platforms,
        data_lancamento: game.first_release_date,
        slug: game.slug,
        resumo: game.summary,
        empresa: game.company,
        capa: game.cover
    
    }
    return listaNova
})


const getGamesById = (request, response) => {
    const id = request.params.id
    const jogo = outraListaGames.find(item => item.id == id)
    if (jogo) {
        response.status(200).send(jogo)
    } else {
        response.status(404).send("Jogo não encontrado!")
    }
}


module.exports = {
    getGames,
    getGamesById
} 


