const express = require('express')
const router = express.Router()
const Weapon = require('../Models/Weapon')
const Character = require('../Models/Character')
const WeaponFactory = require('../utils/WeaponFactory')


// Add some weapons
const weapons = [
  {
    name: 'Mighty Axe',
    mod: 2,
    description: 'An enchanted axe imbued with powerful magic.',
    attr: 'strength',
    type: 'axe'
  },
  {
    name: 'Assassin\'s Blade',
    mod: 3,
    description: 'A sleek, deadly dagger favored by assassins.',
    attr: 'dexterity',
    type: 'sword'
  },
  {
    name: 'Crimson Sword',
    mod: 1,
    description: 'A beautiful sword with a deadly edge, stained with the blood of countless foes.',
    attr: 'constitution',
    type: 'sword'
  },
  {
    name: 'Staff of the Archmage',
    mod: 3,
    description: 'A powerful staff wielded only by the most skilled of mages.',
    attr: 'intelligence',
    type: 'staff'
  },
  {
    name: 'Wisdom Wand',
    mod: 2,
    description: 'A humble wand that channels the wielder\'s wisdom into powerful spells.',
    attr: 'wisdom',
    type: 'wand'
  },
  {
    name: 'Charm Bracelet',
    mod: 1,
    description: 'A delicate bracelet that imbues the wearer with a charismatic aura.',
    attr: 'charisma',
    type: 'misc'
  },
  {
    name: 'Soulstealer Scythe',
    mod: 3,
    description: 'A fearsome scythe that drains the life force of its victims.',
    attr: 'strength',
    type: 'scythe'
  },
  {
    name: 'Frostbrand Sword',
    mod: 2,
    description: 'A blade that crackles with icy energy, freezing its foes in place.',
    attr: 'dexterity',
    type: 'sword'
  },
  {
    name: 'Giant\'s Mace',
    mod: 1,
    description: 'A massive mace that can shatter bones and crush armor with ease.',
    attr: 'constitution',
    type: 'mace'
  },
  {
    name: 'Staff of the Necromancer',
    mod: 3,
    description: 'A staff that channels dark magic and can raise the dead to fight for its wielder.',
    attr: 'intelligence',
    type: 'staff'
  }
]
async function initiateWeapons () {
  for (let item of weapons) {
    const weapon = await new Weapon(item)
    weapon.save()
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