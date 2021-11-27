// /**
//  * 包含n个reducer函数：根据老的state和指定的action返回一个新的state
//  * */
// import {combineReducers} from 'redux'
// import {AUTH_SUCCESS,ERROR_MSG} from '../action_types'
// const initUser={
//     isAuth:false,
//     user:{},
//     username:'',//用户名
//     msg:'',//错误信息
//     redirectTo:'',//需要自动重定向的路由路径
   
        
// }
// //产生uesr状态的reducer
// function user(state = initUser,action){
//     switch(action.type){
        
//         case AUTH_SUCCESS://data user
//             return  {...action.data,redirectTo:'/'}
//         case ERROR_MSG: //data msg
//             return {...state,msg:action.data}
//         default:
//             return state
//     }
// }



// export default combineReducers({
//     user

// })
// //向外暴漏状态的结构对象{user:{} }

import { combineReducers } from "redux";
import loginReducer from './login_reducer'
export default combineReducers({
    userInfo:loginReducer
})