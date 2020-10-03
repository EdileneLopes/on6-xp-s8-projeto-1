const express = require('express')
const app = express()
const router = require('../src/routes/gamesRoutes')

app.use('/', router)

module.exports = app
