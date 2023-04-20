const AttributesFactory = require('./AttributesFactory')

class CharacterFactory {
  static createCharacter(data) {
    switch (data.type) {
    case 'knight':
      return this.createKnight(data)
    case 'wizard':
      return this.createWizard(data)
    case 'weapon':
      return this.generateRandomAttribute(5, 20)
    default:
      break
    }
  }
  static createKnight({name, nickname, birthday, description}) {
    const attributes = {
      strength: AttributesFactory.createAttribute('knight'),
      dexterity: AttributesFactory.createAttribute('knight'),
      constitution: AttributesFactory.createAttribute('knight'),
      intelligence: AttributesFactory.createAttribute('knight'),
      wisdom: AttributesFactory.createAttribute('knight'),
      charisma: AttributesFactory.createAttribute('knight'),
    }
    const keyAttribute = AttributesFactory.findMaxAttribute(attributes)
    return new Knight(name, nickname, birthday, attributes, description, keyAttribute)
  }

  static createWizard({name, nickname, birthday, description}) {
    const attributes = {
      strength: AttributesFactory.createAttribute('wizard'),
      dexterity: AttributesFactory.createAttribute('wizard'),
      constitution: AttributesFactory.createAttribute('wizard'),
      intelligence: AttributesFactory.createAttribute('wizard'),
      wisdom: AttributesFactory.createAttribute('wizard'),
      charisma: AttributesFactory.createAttribute('wizard'),
    }
    const keyAttribute = AttributesFactory.findMaxAttribute(attributes)
    return new Wizard(name, nickname, birthday, attributes, description, keyAttribute)
  }
}

class Knight {
  constructor(name, nickname, birthday, attributes, description, keyAttribute) {
    this.name = name
    this.nickname = nickname
    this.birthday = birthday
    this.attributes = attributes
    this.status = 'legend'
    this.keyAttribute = keyAttribute
    this.description = description || null
  }

  teste (a, b) {
    return a + b
  }
}

class Wizard {
  constructor(name, nickname, birthday, weapons, attributes, description, keyAttribute) {
    this.name = name
    this.nickname = nickname
    this.birthday = birthday
    this.attributes = attributes
    this.keyAttribute = keyAttribute
    this.description = description || null
  }
}

module.exports = CharacterFactory