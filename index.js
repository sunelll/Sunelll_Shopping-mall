const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 5000

const mongoose = require('mongoose')// Using Node.js `require()`
//import mongoose from 'mongoose'// Using ES6 imports


//nelll, abcd1234
mongoose.connect('mongodb+srv://nell:abcd1234@boilerplate.3qc40.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  
}).then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
