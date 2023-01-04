var morgan = require('morgan')
const express = require('express')
morgan('tiny')
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Hello World! Persons at <a href="/api/persons">this</a> link</h1>')
  })

  app.get('/info', (request, response) => {
    var currTime = new Date()
    response.send(`Phonebook has info for ${persons.length} people<br>${currTime}`)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => {
        console.log(person.id, id, (person.id != id))
        person.id != id
    })
    response.status(204).end()
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.post('/api/persons', (request, response) => {
    if (!request.body.name || !request.body.number) {
        response.json("Must include name and number!")
        return
    }
    if (persons.filter(person => person.name == request.body.name).length > 0) {
        response.json("Already in phonebook!")
        return
    }
    let newPerson = {
        name: request.body.name,
        number: request.body.number,
        id: Math.floor(Math.random() * 1000)
    }
    persons.push(newPerson)
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

let persons = [
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

