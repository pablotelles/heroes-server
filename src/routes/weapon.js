'use strict'

const express = require('express')
const Router = express.Router()

// Controllers
const WeaponController = require('../Controllers/WeaponController')

// Routes
Router.get('/', WeaponController.index)
Router.post('/', WeaponController.create)
Router.put('/', WeaponController.update)
Router.get('/:id', WeaponController.getById)


module.exports = Router