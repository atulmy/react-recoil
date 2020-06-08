'use strict';

// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Express
let app = express()
let port = 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Database
let users = [
  { id: 1, username: 'user' }
]
let notes = [
  { id: 1, userId: 1, text: 'Hello world.' },
  { id: 2, userId: 1, text: 'This is a note I have noted down.' },
]

// Routes
// user register
app.post('/user/register', (req, res) => {
  const response = {
    success: false,
    message: ''
  }

  // find user
  const user = users.find(u => u.username === req.body.username)

  if(!user) {
    // create user
    users.push({
      id: users.length + 1,
      username: req.body.username
    })

    response.success = true
    response.message = 'Registered successfully! You can now login.'
  } else {
    response.message = 'Unable to register, user already exists.'
  }

  res.json(response)
})

// user login
app.post('/user/login', (req, res) => {
  const response = {
    success: false,
    message: '',
    user: null,
  }

  // find user
  const user = users.find(u => u.username === req.body.username)

  if(user) {
    response.success = true
    response.message = 'Logged in successfully.'
    response.user = user
    response.token = jwt.sign({ id: user.id }, 'SECRET')
  } else {
    response.message = 'Unable to login, user not found.'
  }

  res.json(response)
})

// note list
app.get('/note/list', (req, res) => {
  const response = {
    success: false,
    message: '',
    list: []
  }

  try {
    let header = req.headers.authentication
    const userToken = jwt.verify(header.split(' ')[1], 'SECRET')

    // find user
    const user = users.find(u => u.id === userToken.id)

    if(user) {
      // find notes
      response.list = notes.filter(n => n.userId === user.id).reverse()
      response.success = true
    } else {
      response.message = 'You are not authorized.'
    }
  } catch (e) {
    response.message = 'There was some server error.'
  }

  res.json(response)
})

// note create
app.post('/note/create', (req, res) => {
  const response = {
    success: false,
    message: '',
    list: []
  }

  try {
    let header = req.headers.authentication
    const userToken = jwt.verify(header.split(' ')[1], 'SECRET')

    // find user
    const user = users.find(u => u.id === userToken.id)

    if(user) {
      // create note
      notes.push({
        id: notes.length + 1,
        userId: user.id,
        text: req.body.text
      })

      console.log(notes)

      response.success = true
      response.message = 'Note has been added successfully.'
    } else {
      response.message = 'You are not authorized.'
    }
  } catch (e) {
    response.message = 'There was some server error.'
  }

  res.json(response)
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
