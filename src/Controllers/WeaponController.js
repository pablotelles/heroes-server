const express = require('express')
const router = express.Router()
const Weapon = require('../Models/Weapon')
const Character = require('../Models/Character')
const WeaponFactory = require('../utils/WeaponFactory')
const {InitialWeapons} = require('../../data/initialData')


// Add some weapons

async function initiateWeapons () {
  for (let item of InitialWeapons) {
    const weapon = await new Weapon(item)
    await weapon.save()
  }

  return 
}
initiateWeapons()

router.index = async (req, res) => {
  try {
    const weapons = await Weapon.find()
    return res.status(200).send(weapons)
  } catch (err) {
    return res.status(400).send(err)
  }
}

router.create = async (req, res) => {
  const data = req.body

  try {
    const product = await WeaponFactory.createWeapon(data)
    const weapon = await new Weapon(product)
    await weapon.save()
    return res.status(200).send(weapon)
  } catch (error) {
    return res.status(200).send(error)
  }
}

router.getById = async (params, res) => {
  const {id} = params.params
  try {
    const weapons = await Weapon.findById(id)
    return res.status(200).send(weapons)
  } catch (err) {
    return res.status(400).send(err)
  }
}
router.update = async (req, res) => {
  const data = req.body
  try {
    const weapon = new Weapon(data)
    weapon.save()
    return res.status(200).send(weapon)
  } catch (error) {
    return res.status(200).send(error)
  }
}
router.equipped = async (req, res) => {
  const { weaponId , charId} = req.body
  try {
    const char = await Character.findById(charId)
      .populate('weapons') 

    char.weapons.forEach((weapon) => {
      if(weapon._id.equals(weaponId)) {        
        weapon.equipped = true        
      } else {
        weapon.equipped = false
      }
    })
    await char.save()
    return res.status(200).send(char)
  } catch (error) {
    return res.status(200).send(error)
  }
}

module.exports = router