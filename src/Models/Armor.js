const mongoose = require('mongoose')

const ArmorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  defense: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
},
{ timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.__v
    }
  }
}
)

const Armor = mongoose.model('Armor', ArmorSchema)

module.exports = Armor
