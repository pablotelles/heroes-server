'use strick'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
  update_at: {
    type: Date,
    default: () => Date.now(),
  }
})

userSchema.pre('save', function () {
  this.update_at = Date.now()
})

const User = mongoose.model('User', userSchema)

module.exports = User