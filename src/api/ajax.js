// /**发送ajax请求的函数模块
//  * 函数的返回值是promise对象
//  */
// import axios from "axios";
// export default function ajax(url,data={},type='GET'){
//     if(type === 'GET'){
//         //{username:hhd,password:123}
//         let paramStr=''
//         Object.keys(data).forEach(key =>{
//             paramStr += key+ '=' + data[key] + '&'
//         })
//         if(paramStr){
//            paramStr = paramStr.substring(0,paramStr.length-1)
//         }
//         //发送get请求
//         return axios.get(url+ '?' +paramStr)
//     }else{
//         //发送post请求
//         return axios.post(url,data)
//     }

// }
import axios from "axios";
import qs from 'querystring'
//配置超时
const instance = axios.create({
    timeout:4000,

    });
    //请求拦截器
instance.interceptors.request.use((config)=>{
    console.log(config)
    const {method,data} = config
    //如果是post请求
    if(method.toLocaleLowerCase()==='post'){
        if(data instanceof Object){
            config.data = qs.stringify(data)
        }
    }
    return config
});
//响应拦截器
instance.interceptors.response.use(
(response)=>{
    //请求若成功 
    return response;
},
(error)=>{
    // 请求失败
    return Promise.reject(error);
});

export default instance