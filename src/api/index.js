/**包含了n个接口请求的函数模块函数返回值为promise */
//注册接口
import ajax from "./ajax"
export const reqRegister = (user) =>ajax('/register',user, 'POST' )
export const reqLogin =({username,pasword}) =>ajax('/login',{username,pasword},'POST')