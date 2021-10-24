// import axios from "axios";
/**包含了n个接口请求的函数模块函数返回值为promise */
//注册接口
import ajax from "./ajax"
// export const reqLogin =({username,pasword}) =>ajax('/login',{username,pasword},'POST')
// //更新用户接口
// export const reqUpdateUser =(user) =>ajax('/update',user,'POST')


//发送登录请求
export const reqLogin =(username,password) =>ajax.post('/login',{username,password})
export const reqRegister = (username) =>ajax.post('/register',username )
   
