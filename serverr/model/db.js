// var MongoClient =require('mongodb').MongoClient
// var url  = 'mongodb://localhost:27017'
// var dbName = 'MyNewBlog'
// //数据库的连接方法封装
//  function connect(callback){
//     MongoClient.connect(url,function(err,client){
//         if(err){
//             console.log('数据库连接失败',err)
//         }else{
//             console.log('数据库连接成功')
//             var db = client.db(dbName)
//             callback && callback(db)
//             client.close()
//         }
//     })
// }
// module.exports ={connect}
const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost:27017/MyNewBlog')
const connection = mongoose.connection
const md5 = require('blueimp-md5')//密码加密md5
connection.on('connected',function(){
    //连接成功数据库调用
    console.log('数据库连接成功！');
})
const userSchema = mongoose.Schema({
    //指定文档结构  属性名/属性值的类型/是否是必须的/默认值
    username:{type:String,required:true},//用户名
    password:{type:String,required:true},//密码
    type:{type:String,required:true},//用户类型
    header:{type:String}
})
const UserModel = mongoose.model('user',userSchema)//集合的名称是：users
//进行CRUD操作
//通过Model实例的save()添加数据
function testSave(){
  const userModel =  new UserModel({username:'hhdd',password:md5('12345'),type:'dage'})
  userModel.save(function(error,userDoc){
    console.log('save()',error,userDoc)
  })
}
testSave()
//通过Model的find查询
function testFind() {
    UserModel.find(function(error,users){
        console.log('find()',error,users )
    })
    // UserModel.findOne(function(error,users){
    //     console.log('find()',error,users )
    // })
}
testFind()

//更新   Model的findByIdAndUpdate更新某个数据
function testUpdate(){
    UserModel.findByIdAndUpdate({_id:'613881fb56d0a1cded11cc62'},{username:'huhaoda'},
    function(error,oldUser){
        console.log('Update',error,oldUser)

    })
}
testUpdate()

//删除操作
function testDelete(){
    UserModel.remove({_id:'613881fb56d0a1cded11cc62'},function(error,doc){
        console.log('remove',error,doc)
    })
}
testDelete()
