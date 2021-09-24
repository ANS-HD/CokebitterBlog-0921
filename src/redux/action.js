/**
 * 包含n个action creator
 * 异步action
 * 同步action
 */

import {AUTH_SUCCESS,ERROR_MSG} from './action_types'
import {reqLogin,
    reqRegister
    } from '../api/index.js'
    //授权成功的action
    const authSuccess =(user)=>({type:AUTH_SUCCESS,data:user})
    //错误提示信息的action
    const errorMsg =(msg)=>({type:ERROR_MSG,data:msg})
//注册异步action
export const register = (user) =>{
    const {Username,password,confirm} = user;
    
    //表单的前台验证  如果不通过，返回一个errorMsg的同步action
    if(password!==confirm){
        return errorMsg('密码不一致，两次密码要一致')
    }
    //表单数据合法  返回一个发ajax请求的异步action
    return async dispatch=>{

        //发送注册的异步请求
        const response = await reqRegister({Username,password,confirm})
        const result = response.data
        
        if(response.code===0){
            //分发成功的action
            dispatch (authSuccess(result.data))
        }else{
            //分发失败的action
            dispatch(errorMsg(result.msg))
        }
        

    }
}
//注册登录action
export const login = (user) =>{
    const {username,password} = user;
    if(!password){
        return errorMsg('密码输入错误！')
    }
    return async dispatch=>{
        //发送注册的异步请求
        const response = await reqLogin({username,password})
        const result =response.data
        if(response.code===0){
            //分发成功的action
            dispatch (authSuccess(result.data))
        }else{
            //分发失败的action
            dispatch(errorMsg(result.msg))
        }

    }
}