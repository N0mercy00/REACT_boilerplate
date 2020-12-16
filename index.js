const express = require('express') //express 모듈을 가져온다
const app = express()//새로운 express 앱을 생성
const port = 3000//사용할 포트
const bodyParser=require('body-parser');
const {User}=require("./models/User");

const config=require('./config/key');

//데이터 분석해서 가져오는 부분 urlencoded 형식을 가진경우 아래는 json타입
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')//몽구스 불러오기

mongoose.connect(config.mongoURI,{
  useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex :true, useFindAndModify:false,useUnifiedTopology:true
  //에러방지를 위한 셋팅 
}).then(()=>console.log('MongoDB Connected...'))//연결되면 연결됬다고
  .catch(err=>console.log(err))//에러나면 에러 내용 출력
//키값 넣어주기

//루트 디렉토리 도착시 hello world 출력
app.get('/', (req, res) => {
  res.send('Hello World! nodemon ONLINE')
})

app.post('/register',(req,res)=>{
  //회원가입 필요 정보 client에서 가져오면, 그것들을 DB에 넣는다.
  
  const user =new User(req.body)//bodyparser을 이용해서 바디에 걍 넣을수 있는거

  //세이브 하기전 여기서 암호화
  //User.js에서 작업 <--왜 여기서 하는지는 모름 왜 저기서 함??
  //

  user.save((err,suerInfo)=>{
    if(err) return res.json({success : false,err}) 
    return res.status(200).json({
      success:true
    })
  })//몽고디비 저장하는것
})

//해당 포트에서 앱실행
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//