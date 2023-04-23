const express = require('express')
const router = express.Router()
const Character = require('../Models/Character')
const CharacterFactory = require('../utils/CharacterFactory')
const Weapon = require('../Models/Weapon')
const {genereteRadomNumber} = require('../utils/comuns')
const { InitialWeapons, Initialknights, InitialArmors } = require('../../data/initialData') // adds characters and weapons to start

async function initiateCharacter () {
  for (let item of Initialknights) {
    const product = await CharacterFactory.createCharacter(item)
    const character = await new Character(product)
    for (let i = 0; genereteRadomNumber(1, 8) > i; i++) {
      character.weapons.push(InitialWeapons[genereteRadomNumber(0, 9)])
    }
    for (let i = 0; genereteRadomNumber(1, 8) > i; i++) {
      character.armor.push(InitialArmors[genereteRadomNumber(0, 4)])
    }   
    await character.save()
  }
  return 
}
initiateCharacter()

router.index = async (params, res) => {
  try {
    const character = await Character.find()
      .populate('weapons')
      .populate('armor')
      .populate('attributes')
      .lean()

    return res.status(200).send(character)
  } catch (err) {
    return res.status(400).send(err)
  }
}

router.create = async (req, res) => {
  const data = req.body

  try {
    const product = await CharacterFactory.createCharacter(data)
    const character = new Character(product)
    if (data.weaponId) {
      const {name, attr, mod, description, type } = await Weapon.findById(data.weaponId)
      character.weapons.push({name, attr, mod, description, type, equipped: true})
    }
    await character.save()
    return res.status(200).send(character)
  } catch (error) {
    return res.status(200).send(error)
  }

}

router.getById = async (params, res) => {
  const {id} = params.params
  try {
    const character = await Character.findById(id)
    return res.status(200).send(character)
  } catch (err) {
    return res.status(400).send(err)
  }
}

router.update = async (req, res) => {
  const data = req.body
  const { id } = req.params
  try {
    const character = await Character.updateOne({_id: id}, data)
    await character.save()
    return res.status(200)
  } catch (error) {
    return res.status(200).send(error)
  }
}

router.delete = async (params, res) => {
  const {id} = params.params
  try {
    const character = await Character.updateOne({_id: id}, {status: 'hero'})
    await character.save()
    return res.status(200)
  } catch (error) {
    return res.status(200).send(error)
  }
}

router.filter = async (params, res) => {
  const {status} = params.query
  try {
    const character = await Character.find({status: status})
      .populate('weapons')
      .populate('attributes')
      .lean()

    return res.status(200).send(character)
  } catch (err) {
    return res.status(400).send(err)
  }
}

module.exports = router