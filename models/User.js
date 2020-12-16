const mongoose = require('mongoose');//몽구스 불러오기

//스키마 생성창
const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        maxlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User =mongoose.model('User',userSchema)//화려한 모델이 스키마를 감싸네
module.exports={User}//외부 사용 가능하게