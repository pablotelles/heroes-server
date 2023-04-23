const { genereteRadomNumber } = require('../src/utils/comuns')

// Add some characters
const Initialknights = [
  {
    name: 'Gandalf',
    nickname: 'The Grey',
    birthday: '1890-02-14',
    type: 'wizard',
    status: 'legend',
    description: 'A wise and powerful wizard, who has been a member of the Tibian Council of Wizards for many years.'
  },
  {
    name: 'Bilbo Bolseiro',
    nickname: 'The Hobbit',
    birthday: '1900-09-22',
    type: 'thief',
    status: 'legend',
    description: 'A famous hobbit, who gained notoriety for his role in the quest for the Lonely Mountain and his possession of the One Ring. Despite his age, he remains spry and quick-witted, and is known for his love of good food and comfortable lodgings.'
  },
  {
    name: 'Legolas',
    nickname: 'The Archer',
    birthday: '1980-07-21',
    type: 'ranger',
    status: 'hero',
    description: 'An elven archer, who has travelled across the land of Tibia and is known for his exceptional skills with a bow.'
  },
  {
    name: 'Aragorn',
    nickname: 'The Ranger',
    birthday: '1965-03-01',
    type: 'knight',
    status: 'legend',
    description: 'A skilled swordsman and tracker, who has served as a loyal protector of the kingdom of Tibia for many years.'
  },
  {
    name: 'Sauron',
    nickname: 'The Dark Lord',
    birthday: '1965-03-01',
    type: 'necromancer',
    status: 'legend',
    description: 'An evil sorcerer, who seeks to conquer the land of Tibia and enslave its inhabitants.'
  },
  {
    name: 'Drizzt',
    nickname: 'The Drow',
    birthday: '1975-11-05',
    type: 'thief',
    status: 'hero',
    description: 'A skilled and cunning drow, who has used his stealth and agility to outsmart many opponents in the land of Tibia.'
  },
  {
    name: 'Elminster',
    nickname: 'The Sage',
    birthday: '1945-12-02',
    type: 'wizard',
    status: 'legend',
    description: 'A powerful wizard, who has been a mentor to many young wizards in the land of Tibia.'
  },
  {
    name: 'Wulfgar',
    nickname: 'The Barbarian',
    birthday: '1985-04-30',
    type: 'warrior',
    status: 'hero',
    description: 'A fierce warrior, who has proven his strength and courage in many battles across the land of Tibia.'
  },
  {
    name: 'Raistlin',
    nickname: 'The Dark Mage',
    birthday: '1970-09-17',
    type: 'sorcerer',
    status: 'legend',
    description: 'A powerful mage, who has delved deep into the forbidden arts of magic, risking his sanity and his soul in the process.'
  },
  {
    name: 'Artemis',
    nickname: 'The Bounty Hunter',
    birthday: '1990-06-23',
    type: 'hunter',
    status: 'hero',
    description: 'A skilled hunter, who has made a name for himself by tracking down dangerous beasts and bandits in the land of Tibia.'
  },
  {
    name: 'Xena',
    nickname: 'The Warrior Princess',
    birthday: '1980-03-15',
    type: 'warrior',
    status: 'hero',
    description: 'A fearless warrior, who has fought against many enemies in the land of Tibia, including dragons, demons, and undead.'
  }
]
// Add some weapons
const InitialWeapons = [
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

const InitialArmors = [
  {
    name: 'Leather Armor',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'A basic armor made of leather.'
  },
  {
    name: 'Chain Armor',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'A heavy armor made of interlocking chains.'
  },
  {
    name: 'Plate Armor',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'A full body armor made of metal plates.'
  },
  {
    name: 'Robe',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'A simple robe made of light fabric.'
  },
  {
    name: 'Studded Armor',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'A reinforced armor with metal studs.'
  },
  {
    name: 'Scale Armor',
    defense: genereteRadomNumber(2, 8),
    type: 'Armor',
    equipped: false,
    description: 'An armor made of small metal scales.'
  },
  {
    name: 'Plate Legs',
    defense: genereteRadomNumber(2, 8),
    type: 'Legs',
    equipped: false,
    description: 'Metal leg plates that offer excellent protection.'
  },
  {
    name: 'Chain Helmet',
    defense: genereteRadomNumber(2, 8),
    type: 'Helmet',
    equipped: false,
    description: 'A helmet made of interlocking chains.'
  },
  {
    name: 'Plate Shield',
    defense: genereteRadomNumber(2, 8),
    type: 'Shield',
    equipped: false,
    description: 'A large metal shield that provides great defense.'
  },
  {
    name: 'Crown',
    defense: genereteRadomNumber(2, 8),
    type: 'Helmet',
    equipped: false,
    description: 'A golden crown adorned with precious gems.'
  }
]

module.exports = {
  Initialknights,
  InitialWeapons,
  InitialArmors
}