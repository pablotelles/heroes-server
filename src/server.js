'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoUnit = require('mongo-unit')
const mongoose = require('mongoose')
const port= 5000
require('dotenv').config()

const app = express()

// solve cors
app.use(cors({credentials: true, origin: '*'}))

async function conn () {
// Make connection with MongoDB
  const dbUrl = await mongoUnit.start()
  await mongoose.connect(dbUrl, { useNewUrlParser: true })
}

conn()


// mongoose
//   .connect(String(process.env.MONGO_ACESS))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
const routes = require('./routes/routes')
app.use('/', routes)


app.listen(port, () => {
  console.log('Server rodando na porta: ',port)
})


module.exports = app