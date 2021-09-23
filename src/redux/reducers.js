/**
 * 包含n个reducer函数：根据老的state和指定的action返回一个新的state
 * */
import {combineReducers} from 'redux'

const initUser={
    username:'',//用户名
    msg:'',//错误信息
    
}
//产生uesr状态的reducer
function user(state = initUser,action){
    switch(action.type){

        default:
            return state
    }
}



export default combineReducers({
    user

})
//向外暴漏状态的结构对象{user:{} }