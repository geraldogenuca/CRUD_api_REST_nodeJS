// Import depedencies and libs.
const express = require('express')
, app = express()
, cors = require('cors')
, morgan = require('morgan')

// Import routes.


// Running dependencies and libs.
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Running routes, creating end-points.


app.use('/test01', (req, res) => {res.json('Index on go!')})

module.exports = app