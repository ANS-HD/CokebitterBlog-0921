import {SAVE_USER_INFO} from './action_types'
import {DELETE_USER_INFO} from './action_types'
export const createsaveUserInfoAction =(value)=>{
    // console.log(value.data)
    localStorage.setItem('user', JSON.stringify(value.data))
    localStorage.setItem('token', value.token)
    localStorage.setItem('isLogin', true)
    return {type:SAVE_USER_INFO,data:value}
}
//退出登录
export const createdeleteUserInfoAction =()=>{
    
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    
    return {type:DELETE_USER_INFO}
}