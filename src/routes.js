const express = require('express')
const persons = require('./controllers/persons')

const router = express.Router()

// Create
router.post('/persons', persons.createPerson)

// Read
router.get('/persons', persons.getPersons)
router.get('/persons/:id', persons.getPerson)

// Update
router.patch('/persons/:id', persons.updatePerson)

// Delete
router.delete('/persons/:id', persons.deletePerson)

module.exports = router