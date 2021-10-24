var express = require('express');
var router = express.Router();
const md5 = require('blueimp-md5')
const  UserModel =require('../model/model').UserModel/* GET home page. */
const filter = {password:0}
// router.get('/', function(req, res, next) {
//   model.connect(function(db){
//     db.collection('users').find().toArray(function(err,docs){
//       console.log('用户列表',docs)
//       res.render('index', { title: 'Express' });
//     })
//   })
// });
router.get('/',function(req,res,next){
  res.render('index',{title:'Express'})
})


//注册路由

router.post('/register',function(req,res){
  const {username,password,password2} = req.body
  // 根据username和password查询数据库users集合，没有 登陆失败用户名或密码不存在  
  // 如果有 返回一个表示成功的信息（包含user）
  UserModel.findOne({username},function(error,user){
    if(user){//
       //生成cookie
       res.send({code:1,msg:'用户名已存在！'})
      }else{//登陆失败
        new UserModel({username,password,password2}).save(function(error,user){
          // res.cookie('userid',user._id,{maxAge:1000*60*60*24})
          const data = {username}//响应数据不要携带密码
          res.send({code:0,data})
        })
    }
  })
})
//登录路由
router.post('/login',function(req,res){
  const {username,password} = req.body
  // 根据username和password查询数据库users集合，没有 登陆失败用户名或密码不存在  
  // 如果有 返回一个表示成功的信息（包含user）
  UserModel.findOne({username,password:md5(password)},filter,function(error,user){
    if(user){//登陆成功
       //生成cookie
        res.cookie('userid',user._id,{maxAge:1000*60*60*24})
        //返回成功的信息
        res.send({code:0,data:user})
    }else{//登陆失败
      res.send({code:1,msg:'用户名或密码不正确！'})
    }
  })
})




router.get('/',function(req,res,next){
  res.render("login" )
})

module.exports = router;
