'use strict';

// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Express
let app = express()
let port = 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Database
let users = []
let notes = []

// Routes
// user register
app.post('/user/register', (req, res) => {
  const id = users.length + 1

  // create user
  users.push({
    id,
    username: req.body.username
  })

  res.json({
    success: true
  })
})

// user login
app.post('/user/login', (req, res) => {
  // find user
  const user = users.find(u => u.username === req.body.username)

  res.json({
    success: !!user,
    user
  })
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
