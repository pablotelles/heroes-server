const { genereteRadomNumber } = require('./comuns')
class  AttributesFactory {
  static createAttribute(type) {
    switch (type) {
    case 'knight':
      return genereteRadomNumber(4, 20)
    case 'wizard':
      return genereteRadomNumber(6, 20)
    case 'weapon':
      return genereteRadomNumber(1, 3)
    default:
      break
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