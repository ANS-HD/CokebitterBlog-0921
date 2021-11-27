// import axios from "axios";
/**包含了n个接口请求的函数模块函数返回值为promise */
//注册接口
// import { message } from 'antd'
// import jsonp from 'jsonp'

import ajax from "./ajax"
// export const reqLogin =({username,pasword}) =>ajax('/login',{username,pasword},'POST')
// //更新用户接口
// export const reqUpdateUser =(user) =>ajax('/update',user,'POST')


//发送登录请求
export const reqLogin =(username,password) =>ajax.post('/login',{username,password})
export const reqRegister = (username) =>ajax.post('/register',username )
   
/**
 * jsonp请求的接口请求函数
 * 
 */
// export const reqWeather=(city)=>{
//     return new Promise((resolve,reject)=>{
//         const url =`https://www.tianqiapi.com/free/day?appid=26366489&appsecret=uerFkZv8&city=${city}`
//         jsonp(url,{},(err,data)=>{
//             console.log('jsonp()',err,data)
//             //如果成功
//             if(!err ){
//                 const { wea ,wea_img}=data
//                 resolve({wea,wea_img})
//             }else{
//                 //如果失败
//                 message.error('获取天气信息失败！')
//             }
//         })
//     })
// }
