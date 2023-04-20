class  AttributesFactory {
  static createAttribute(type) {
    switch (type) {
    case 'knight':
      return this.generateRandomAttribute(4, 20)
    case 'wizard':
      return this.generateRandomAttribute(6, 20)
    case 'weapon':
      return this.generateRandomAttribute(1, 3)
    default:
      break
    }
  }
  static generateRandomAttribute(min, max) {
    const result = Math.floor(Math.random() * (max - min + 1) + min)
    return result
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