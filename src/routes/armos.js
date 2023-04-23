const express = require('express')
const Router = express.Router()

// Controllers
const ArmorController = require('../Controllers/ArmorController')

// Routes
Router.get('/', ArmorController.index)
Router.post('/', ArmorController.create)
Router.put('/:id', ArmorController.update)
Router.get('/:id', ArmorController.getById)
Router.delete('/:id', ArmorController.delete)
Router.post('/equpped', ArmorController.equipped)



module.exports = Router