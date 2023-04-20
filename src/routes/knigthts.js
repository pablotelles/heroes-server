'use strict'

const express = require('express')
const Router = express.Router()

// Controllers
const CharacterController = require('../Controllers/CharacterController')

// Routes
Router.get('/', (params, res, next) =>  {
  const filter = params.query
  if (Object.keys(filter).length)  return CharacterController.filter(params, res)
  CharacterController.index(params,res)
})
Router.post('/', CharacterController.create)
Router.put('/:id', CharacterController.update)
Router.delete('/:id', CharacterController.delete)
Router.get('/:id', CharacterController.getById)
// Router.get('/:status', CharacterController.getById)


module.exports = Router