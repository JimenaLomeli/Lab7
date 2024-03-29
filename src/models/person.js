const validator = require('validator')
const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  born: {
    type: String
  },
  timeline: {
    type: String
  },
  alliegance: {
    type: [String]
  },
  playedBy: {
    type: String
  },
  titles: {
    type: [String]
  }, 
  father: {
    type: String
  },
  mother: {
    type: String
  },
  spouse: {
    type: String
  }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person
