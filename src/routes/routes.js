const express = require('express')
const Router = express.Router()

// Routes
const KnigthtsRouter = require('./knigthts')
const WeaponsRouter = require('./weapon')
const ArmorsRouter = require('./armos')


Router.use('/knigthts', KnigthtsRouter)
Router.use('/weapons', WeaponsRouter)
Router.use('/armor', ArmorsRouter)



module.exports = Router