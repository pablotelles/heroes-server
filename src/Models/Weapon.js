const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HandleAttributes = require('../utils/AttributesFactory')

const WeaponSchema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    mod: {
      type: Number,
      required: true,
      default: () => HandleAttributes.createAttribute('weapon'),
    },
    description: {
      type: String,
    },
    attr: {
      type: String,
    },
    equipped: {
      type: Boolean,
    },
    type: {
      type: String,
      enum: ['axe', 'sword', 'arrow', 'wand', 'mace', 'misc', 'staff', 'scythe']
    }
  },
  { timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v
      }
    }
  }
)

WeaponSchema.pre('save', function (next) {

  this.updated_at = new Date()
  next()
})

const Weapon = mongoose.model('Weapon', WeaponSchema)

module.exports = Weapon