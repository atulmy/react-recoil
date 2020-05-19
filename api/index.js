'use strict';

// Imports
const express = require('express')
const bodyParser = require('body-parser')

// Express Settings
let app = express()
let port = 4000

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
