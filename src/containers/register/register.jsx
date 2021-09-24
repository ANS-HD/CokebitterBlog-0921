import { Form, Input, Button } from 'antd';

import { Component } from 'react';
import {connect} from 'react-redux'
import {register} from '../../redux/action'
import './register.less'

class Register extends Component {
  state={
    username:'',//用户名
    password:'',//密码
    confirm:'',//确认密码
  }
  //注册提交
  render() {
    const onFinish = () => {
      this.props.register(this.state)
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
        <p>注册</p>
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
          name="confirm"
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
  state =>({}),
  {register}
)(Register)