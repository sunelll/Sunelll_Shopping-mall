const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./model/User");
//const res = require('express/lib/response');

//application/x-www-form-urlncoded <이런 형태의 코드를 분석해서 가지고 올수 있게 해주는 것
app.use(bodyParser.urlencoded({ extended: true }))
//application/json
app.use(bodyParser.json())
app.use(cookieParser())

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI , {  
}).then(() => console.log('MongoDB Connected...'))
.catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 오늘은 1월입니다! 새해복 만이 받으세용!')
})

app.post('/api/users/register', (req, res) => { 
  //회원 가입 할 때 필요한 정보드를 CLIENT에서 가져오면,
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  //몽고DB에 저장, 만약 에러가 있다면 클라이언트에 에러가 있다고 json 형식으로 전달하고, 에러 메세지도 전달.
  user.save((err, user) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.post('/api/users/login', (req, res) => {
  
  //1.요청된 이메일을 데이터베이스에서 있는지 찾는다. 몽고디비 메세지
  User.findOne({ email: req.body.email } , (err, user) => {
    if(!user){
      return res.json({
        loginSuccess: false,
        message: "입력하신 이메일 아이디가 없습니다."
      })
    }

      //2.요청한 이메일이 있다면 비밀번호가 같은지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch)
          return res.json({
            loginSuccess: false,
            message: "입력하신 비밀번호가 맞지 않습니다." })
  
          //3.모두 같다면 유전 Token 생성
          user.generateToken((err, user) => {
            if(err) return res.status(400).send(err);
  
            //쿠키에 토큰을 저장
            res.cookie("x_auth", user.token)
            .status(200)
            .json({
              loginSuccess: true, userId: user._id })
  
            })
        })
    })
})

//Auth 기능
app.get('/api/users/auth', auth, (res, req) =>{
  
  //여기까지 미들웨어를통과해 왔다는 얘기는 AUthentication 이 True 라는 말
  res.status(200).json({
    _id:req.user_id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) =>
{
  User.findOneAndUpdate({_id: req.user._id} ,
    {token: ""}
    , (err, user) =>{
      if(err) returnres.json({ success: false, err })
      return res.status(200).send({
        success: true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
