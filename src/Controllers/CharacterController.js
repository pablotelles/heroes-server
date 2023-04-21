const express = require('express')
const router = express.Router()
const Character = require('../Models/Character')
const CharacterFactory = require('../utils/CharacterFactory')
const Weapon = require('../Models/Weapon')
const AttributesFactory = require('../utils/AttributesFactory')

// Add some characters
const knights = [
  {
    name: 'Jon Snow',
    nickname: 'The Bastard of Winterfell',
    birthday: '1986-07-01',
    type: 'knight',
    status: 'legend',
    description: 'Former Lord Commander of the Nights Watch and King in the North.',
  },
  {
    name: 'Brienne of Tarth',
    nickname: 'The Maid of Tarth',
    birthday: '1984-09-15',
    type: 'knight',
    status: 'legend',
    description: 'A skilled warrior and loyal protector of the Stark sisters.',
  },
  {
    name: 'Jaime Lannister',
    nickname: 'The Kingslayer',
    birthday: '1980-06-06',
    type: 'knight',
    status: 'legend',
    description: 'A skilled swordsman and former Lord Commander of the Kingsguard.',
  },
  {
    name: 'Sandor Clegane',
    nickname: 'The Hound',
    birthday: '1981-03-21',
    type: 'knight',
    status: 'legend',
    description: 'A fierce fighter and former bodyguard to the Lannisters.',
  },
  {
    name: 'Tormund Giantsbane',
    nickname: 'Tormund Thunderfist',
    birthday: '1982-11-12',
    type: 'knight',
    status: 'legend',
    description: 'A wildling warrior and ally to Jon Snow.',
  },
  {
    name: 'Podrick Payne',
    nickname: 'Pod',
    birthday: '1992-04-15',
    type: 'knight',
    status: 'legend',
    description: 'A squire turned skilled warrior and loyal follower of Brienne of Tarth.',
  },
  {
    name: 'Grey Worm',
    nickname: 'The Unsullied',
    birthday: '1991-08-27',
    type: 'knight',
    status: 'legend',
    description: 'A highly trained warrior and former commander of the Unsullied army.',
  },
  {
    name: 'Davos Seaworth',
    nickname: 'The Onion Knight',
    birthday: '1983-12-22',
    type: 'knight',
    status: 'legend',
    description: 'A former smuggler turned advisor and supporter of Stannis and Jon Snow.',
  }
]
// Add some weapons
const weapons = [
  {
    name: 'Mighty Axe',
    mod: 2,
    description: 'An enchanted axe imbued with powerful magic.',
    attr: 'strength',
    equipped: false,
    type: 'axe'
  },
  {
    name: 'Assassin\'s Blade',
    mod: 3,
    description: 'A sleek, deadly dagger favored by assassins.',
    attr: 'dexterity',
    equipped: false,
    type: 'sword'
  },
  {
    name: 'Crimson Sword',
    mod: 1,
    description: 'A beautiful sword with a deadly edge, stained with the blood of countless foes.',
    attr: 'constitution',
    equipped: false,
    type: 'sword'
  },
  {
    name: 'Staff of the Archmage',
    mod: 3,
    description: 'A powerful staff wielded only by the most skilled of mages.',
    attr: 'intelligence',
    equipped: false,
    type: 'staff'
  },
  {
    name: 'Wisdom Wand',
    mod: 2,
    description: 'A humble wand that channels the wielder\'s wisdom into powerful spells.',
    attr: 'wisdom',
    equipped: false,
    type: 'wand'
  },
  {
    name: 'Charm Bracelet',
    mod: 1,
    description: 'A delicate bracelet that imbues the wearer with a charismatic aura.',
    attr: 'charisma',
    equipped: false,
    type: 'misc'
  },
  {
    name: 'Soulstealer Scythe',
    mod: 3,
    description: 'A fearsome scythe that drains the life force of its victims.',
    attr: 'strength',
    equipped: false,
    type: 'scythe'
  },
  {
    name: 'Frostbrand Sword',
    mod: 2,
    description: 'A blade that crackles with icy energy, freezing its foes in place.',
    attr: 'dexterity',
    equipped: false,
    type: 'sword'
  },
  {
    name: 'Giant\'s Mace',
    mod: 1,
    description: 'A massive mace that can shatter bones and crush armor with ease.',
    attr: 'constitution',
    equipped: false,
    type: 'mace'
  },
  {
    name: 'Staff of the Necromancer',
    mod: 3,
    description: 'A staff that channels dark magic and can raise the dead to fight for its wielder.',
    attr: 'intelligence',
    equipped: false,
    type: 'staff'
  }
]
async function initiateCharacter () {
  for (let item of knights) {
    const product = await CharacterFactory.createCharacter(item)
    const character = await new Character(product)
    for (let i = 0; AttributesFactory.generateRandomAttribute(1, 8) > i; i++) {
      character.weapons.push(weapons[AttributesFactory.generateRandomAttribute(0, 9)])
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