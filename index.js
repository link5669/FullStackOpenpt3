var morgan = require('morgan')
const express = require('express')
morgan('tiny')
const app = express()

app.get('/', (request, response) => {
    response.send('<h1>Hello World! Persons at <a href="/api/persons">this</a> link</h1>')
  })

  app.get('/info', (request, response) => {
    var currTime = new Date()
    response.send(`Phonebook has info for ${persons.length} people<br>${currTime}`)
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id == id)
    if (!person) {
        response.json("Person not found!")
    } else {
        response.json(person)
    }
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

const persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

