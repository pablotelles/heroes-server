const { genereteRadomNumber } = require('./comuns')
class  AttributesFactory {
  static createAttribute(type) {
    switch (type) {
    case 'knight':
      return genereteRadomNumber(2, 20)
    case 'wizard':
      return genereteRadomNumber(2, 25)
    case 'ranger':
      return genereteRadomNumber(2, 20)
    case 'necromancer':
      return genereteRadomNumber(2, 20)
    case 'thief':
      return genereteRadomNumber(2, 30)
    case 'warrior':
      return genereteRadomNumber(2, 22)
    case 'sorcerer':
      return genereteRadomNumber(2, 20)
    case 'hunter':
      return genereteRadomNumber(2, 20)
    default:
      return genereteRadomNumber(2, 20)
    }
  }
  static findMaxAttribute (attributes) {
    let maxAttribute = ''
    let maxValue = -Infinity
    for (const [key, value] of Object.entries(attributes)) {
      if (value > maxValue) {
        maxAttribute = key
        maxValue = value
      }
    }
    return maxAttribute
  }
}


module.exports = AttributesFactory