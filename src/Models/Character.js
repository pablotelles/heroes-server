const mongoose = require('mongoose')
const AttributesFactory = require('../utils/AttributesFactory')

// Cria a model Knight
const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    trim: true
  },
  birthday: {
    type: Date,
    // required: true,
  },
  status: {
    type: String,
    default:'legend',
    enum: ['legend', 'hero']
  },
  weapons: [{
    name: {type: String, require: true},
    attr: {type: String, require: true},
    mod: {type: Number, require: true},
    equipped: {type: Boolean, require: true},
  }],
  attributes: {
    strength: {
      type: Number,
      required: true,
    },
    dexterity: {
      type: Number,
      required: true,
    },
    constitution: {
      type: Number,
      required: true,
    },
    intelligence: {
      type: Number,
      required: true,
    },
    wisdom: {
      type: Number,
      required: true,
    },
    charisma: {
      type: Number,
      required: true,
    },
  },
  keyAttribute: {
    type: String,
    required: true,
    default: function () {
      return AttributesFactory.findMaxAttribute(this.attributes)
    },
  },
  description: {
    type: String,
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

CharacterSchema.pre('save', function (next) {
  if (this.nickname && typeof this.nickname === 'string') {
    this.nickname = this.nickname.replace(/\s+/g, '')
  }
  this.updated_at = new Date()
  next()
})

// Exporta a model Knight
module.exports = mongoose.model('Character', CharacterSchema)



