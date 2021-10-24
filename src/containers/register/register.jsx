import { Form, Input, Button } from 'antd';

import { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { reqRegister } from '../../api';
import {register} from '../../redux/action'

import './register.less'

class Register extends Component {
  state={
    username:'',//用户名
    password:'',//密码
    password2:'',//确认密码
  }
  //处理输入数据的改变  更新对应的状态 name变量
  // handleChange=(name,val)=>{
  //   this.setState({
  //     [name]:val//属性名不是name 而是name的值
  //   })
  // }
  //注册提交
  render() {
   
    const {msg,redirectTo} =this.props.user
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    const onFinish = (username) => {
      reqRegister(username)
      .then((result)=>{
        console.log(result);
     })
     .catch((reason)=>{
        console.log(reason);
     })
      // console.log(this.state);
      // this.props.register(this.state)
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    return (
      
      <div className='components-form-demo-normal-login'>
        {msg?<div className='error-msg'>{msg}</div>:null}
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        className="login-form"
        // initialValues={{
        //   remember: true,
        // }}

      >
        <Form.Item
          name="username"
          label="用户名"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="password2"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('两次密码输入不相同!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" >
            Register
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  };
};
export default connect(
  state =>({user:state.user}),
  {register}
)(Register)