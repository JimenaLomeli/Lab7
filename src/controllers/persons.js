const Person = require('../models/person.js')

const getPersons = function(req, res) {
  Person.find({}).then(function(users) {
    res.send(users)
  }).catch(function(error){
    res.status(500).send({ error })
  })
}

const getPerson = function(req, res) {
  _id = req.params.id
  Person.findById(_id).then(function(user) {
    if ( !user ) {
      return res.send({ error : 'Person not found' })
    }
    return res.send(user)
  }).catch(function(error) {
    return res.status(404).send({ error })
  })
}

const createPerson = function(req, res) {
  const user = new Person(req.body)
  user.save().then(function() {
    return res.send(user)
  }).catch(function(error) {
    return res.status(400).send({ error })
  })
}

const updatePerson = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  // const allowedUpdates = ['name', 'age', 'password', 'email']
  // revisa que los updates enviados sean permitidos, que no envie una key que no permitimos
  const isValidUpdate = true// updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Person.findByIdAndUpdate(_id, req.body ).then(function(user) {
    if (!user) {
      return res.status(404).send({})
    }
    return res.send(user)
  }).catch(function(error) {
    res.status(500).send({ error })
  })
}

const deletePerson = function(req, res) {
  const _id = req.params.id
  Person.findByIdAndDelete(_id).then(function(user){
    if(!user) {
      return res.status(404).send({})
    }
    return res.send(user)
  }).catch(function(error) {
    res.status(505).send({ error })
  })
}

module.exports = { 
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
}