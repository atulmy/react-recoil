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
    const id = users.length + 1

    // create user
    users.push({
      id,
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

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
