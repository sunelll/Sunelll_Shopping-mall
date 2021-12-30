const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 5000

const mongoose = require('mongoose')// Using Node.js `require()`
//import mongoose from 'mongoose'// Using ES6 imports
const bodyParser = require('body-parser')

const config = require('./config/key')
const { User } = require("./model/User");

//application/x-www-form-urlncoded <이런 형태의 코드를 분석해서 가지고 올수 있게 해주는 것
app.use(bodyParser.urlencoded({extended: true}))
//application/json을 분석해서 가지고 올 수 있게 해주는 것.
app.use(bodyParser.json())

mongoose.connect(config.mongoURI , {  
}).then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 오늘은 1월입니다! 새해복 만이 받으세용!')
})

app.post('/register', (req, res) => { 
  //회원 가입 할 때 필요한 정보드를 CLIENT에서 가져오면,
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  //몽고DB에 저장, 만약 에러가 있다면 클라이언트에 에러가 있다고 json 형식으로 전달하고, 에러 메세지도 전달.
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
