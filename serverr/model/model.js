//包含n哥操作数据库几何数据的Model模块

//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/MyNewBlog')
const conn = mongoose.connection
conn.on('connected',()=>{
    console.log('db connect success')
})
const userSchema = mongoose.Schema({
    username:{type:String,required:true},//用户名
    password:{type:String,required:true},//密码
    // type:{type:String,required:true},//用户类型
})
const UserModel = mongoose.model('user',userSchema)
exports.UserModel = UserModel