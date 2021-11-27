import React, { Component } from "react"
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {createsaveUserInfoAction} from '../../redux/action_creators/login_action'
import { connect } from 'react-redux';

import { Redirect } from "react-router";
// import {createsaveUserInfoAction} from '../../redux/login_action'
// import axios from "axios";
import { reqLogin } from '../../api'
import './css/login.less';
import logo from '../../assets/imgs/logo512.png';
const { Item } = Form;
class Login extends Component {
    //自定义校验
    componentDidMount() {
        // console.log(this.props);
    }
    onFinish = async (values) => {
        //  event.preventDefault();//阻止默认事件--禁止form表单提交---通过ajax发送
        const { username, password } = values;
        let result = await reqLogin(username, password);
        const { status, msg, data } = result;
        // console.log(result);
        // console.log(status);
        if (data.code === 0) {
            // const user = result.data;
            // localStorage.setItem('user_key', JSON.stringify(user))
            console.log(data);
            //服务器返回的user信息和token交给redux处理
            this.props.saveUserInfo(data)
            //跳转到admin页面
            this.props.history.replace('/');

        } else {
            message.error(msg, 1)
        }
    }
    render() {
        // const user =  JSON.parse(localStorage.getItem('user_key')|| '{}')
        // if(user._id){
        //     // this.props.history.replace('/login') // 事件回调函数中进行路由跳转
        //     return <Redirect to='/admin'/>//自动跳转到指定的路由路径
        // }
        const {isLogin} =this.props
        if(isLogin){
            return <Redirect to='/admin'/>
        }
        return (
            <div className='login'>
                <header>
                    <img src={logo} alt="logo" />
                    <h1>可乐很苦的Blog</h1>
                </header>
                <section>
                    <h1>登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    // onFinish={this.onFinish}
                    >
                        <Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' },
                            { min: 4, message: '用户名必须大于4位' },
                            { max: 12, message: '用户名必须小于12位' },
                            { pattern: /^\w+$/, message: '用户名必须是字母、数字、下划线组成' },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="username" />
                        </Item>
                        <Item
                            name="password"
                            rules={
                                [
                                    { validator: this.pwdvalidator },

                                ]
                            }
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Item>
                        <Item>
                            <Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Item>

                            <a className="login-form-forgot" href="www.baidu.com">
                                Forgot password
                            </a>
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>

                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default connect(
    state =>({isLogin:state.userInfo.isLogin}),
    {
        saveUserInfo: createsaveUserInfoAction,
    }
    )(Login)