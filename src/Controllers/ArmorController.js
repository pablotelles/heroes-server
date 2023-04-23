const express = require('express')
const router = express.Router()

const Armor = require('../Models/Armor')
const Character = require('../Models/Character')

router.create = async (req, res) => {
  try {
    const armor = await Armor.create(req.body)
    return res.status(201).json(armor)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
},

router.index= async (req, res) => {
  try {
    const armors = await Armor.find()
    return res.json(armors)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
},

router.getById = async (req, res) => {
  try {
    const armor = await Armor.findById(req.params.id)
    if (!armor) {
      return res.status(404).json({ error: 'Armadura não encontrada' })
    }
    return res.json(armor)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
},

router.update = async (req, res) => {
  try {
    const armor = await Armor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!armor) {
      return res.status(404).json({ error: 'Armadura não encontrada' })
    }
    return res.json(armor)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
},

router.delete = async (req, res) => {
  try {
    const armor = await Armor.findByIdAndDelete(req.params.id)
    if (!armor) {
      return res.status(404).json({ error: 'Armadura não encontrada' })
    }
    return res.json({ message: 'Armadura deletada com sucesso' })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

router.equipped = async (req, res) => {
  const { armorId , charId} = req.body
  try {
    const char = await Character.findById(charId)
      .populate('armor') 

    char.armor.forEach((item) => {
      if(item._id.equals(armorId)) {        
        item.equipped = true        
      } else {
        item.equipped = false
      }
    })
    await char.save()
    return res.status(200).send(char)
  } catch (error) {
    return res.status(200).send(error)
  }
}


module.exports = router
