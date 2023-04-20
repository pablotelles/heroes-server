const express = require('express')
const Router = express.Router()

// Routes
const KnigthtsRouter = require('./knigthts')
const WeaponsRouter = require('./weapon')


Router.use('/knigthts', KnigthtsRouter)
Router.use('/weapons', WeaponsRouter)




module.exports = Router