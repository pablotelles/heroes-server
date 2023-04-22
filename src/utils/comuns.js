function genereteRadomNumber(min, max) {
  const result = Math.floor(Math.random() * (max - min + 1) + min)
  return result
}

module.exports = {
  genereteRadomNumber
}