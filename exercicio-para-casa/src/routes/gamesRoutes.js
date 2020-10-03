const express = require('express')
const router = express.Router()
const controller = require('../controller/gamesController')

router.get('/jogos', controller.getGames)
router.get('/jogos/:id', controller.getGamesById)

module.exports = router
