const AttributesFactory = require('./AttributesFactory')

class WeaponFactory {
  static createWeapon(data) {
    switch (data.type) {
    case 'axe':
      return this.createAxe(data)
    case 'sword':
      return this.createSword(data)
    case 'arrow':
      return this.createsArrow(data)
    default:
      break
    }
  }
  static createAxe({ name, description, type }) {
    const mod = AttributesFactory.createAttribute('weapon')
    return new Weapon(name, description, mod, type)
  }

  static createSword({name, description, type}) {
    const mod = AttributesFactory.createAttribute('weapon')
    return new Weapon(name, description, mod, type)
  }
  static createsArrow({name, description, type}) {
    const mod = AttributesFactory.createAttribute('weapon')
    return new Weapon(name, description, mod, type)
  }
}

class Weapon {
  constructor(name, description, mod, type) {
    this.name = name
    this.attr = 'strength'
    this.equipped = false
    this.type = type
    this.mod = mod
    this.description = description
  }
}

module.exports = WeaponFactory