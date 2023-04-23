const AttributesFactory = require('./AttributesFactory')

class CharacterFactory {
  static createCharacter(data) {
    switch (data.type) {
    case 'knight':
      return this.createKnight(data)
    case 'wizard':
      return this.createWizard(data)
    default:
      return this.createOthers(data)
    }
  }
  static createKnight({name, nickname, birthday, description, type}) {
    const attributes = {
      strength: AttributesFactory.createAttribute('knight'),
      dexterity: AttributesFactory.createAttribute('knight'),
      constitution: AttributesFactory.createAttribute('knight'),
      intelligence: AttributesFactory.createAttribute('knight'),
      wisdom: AttributesFactory.createAttribute('knight'),
      charisma: AttributesFactory.createAttribute('knight'),
    }
    const keyAttribute = AttributesFactory.findMaxAttribute(attributes)
    return new Knight(name, nickname, birthday, attributes, description, keyAttribute, type)
  }

  static createWizard({name, nickname, birthday, description, type}) {
    const attributes = {
      strength: AttributesFactory.createAttribute('wizard'),
      dexterity: AttributesFactory.createAttribute('wizard'),
      constitution: AttributesFactory.createAttribute('wizard'),
      intelligence: AttributesFactory.createAttribute('wizard'),
      wisdom: AttributesFactory.createAttribute('wizard'),
      charisma: AttributesFactory.createAttribute('wizard'),
    }
    const keyAttribute = AttributesFactory.findMaxAttribute(attributes)
    return new Wizard(name, nickname, birthday, attributes, description, keyAttribute, type)
  }

  static createOthers({name, nickname, birthday, description, type}) {
    const attributes = {
      strength: AttributesFactory.createAttribute(type),
      dexterity: AttributesFactory.createAttribute(type),
      constitution: AttributesFactory.createAttribute(type),
      intelligence: AttributesFactory.createAttribute(type),
      wisdom: AttributesFactory.createAttribute(type),
      charisma: AttributesFactory.createAttribute(type),
    }
    const keyAttribute = AttributesFactory.findMaxAttribute(attributes)
    return new Wizard(name, nickname, birthday, attributes, description, keyAttribute, type)
  }
}

class Knight {
  constructor(name, nickname, birthday, attributes, description, keyAttribute, type) {
    this.name = name
    this.nickname = nickname
    this.birthday = birthday
    this.attributes = attributes
    this.status = 'legend'
    this.keyAttribute = keyAttribute
    this.description = description || null,
    this.type = type
  }
}

class Wizard {
  constructor(name, nickname, birthday, attributes, description, keyAttribute, type) {
    this.name = name
    this.nickname = nickname
    this.birthday = birthday
    this.attributes = attributes
    this.status = 'legend'
    this.keyAttribute = keyAttribute
    this.description = description || null,
    this.type = type
  }
}

module.exports = CharacterFactory