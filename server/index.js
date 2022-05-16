const mongoose = require('mongoose')
const MONGODB = require('./config')
const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



mongoose.connect(
    MONGODB
);