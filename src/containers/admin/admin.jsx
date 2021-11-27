import React, { Component } from "react"
import { connect } from 'react-redux'

// import { createsaveUserInfoAction } from "../../redux/action_creators/login_action";

import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Menu,Space } from 'antd';
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/logo'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';


import Header from './header/header'
import './admin.less'
import Homepage from '../homepage/homepage'
import Article from '../article/article'
import About from '../about/about'
import LeftNav from '../leftNav/leftNav'
const { Footer, Sider, Content } = Layout
// const { SubMenu } = Menu;




class Admin extends Component {
    componentDidMount() {
        // console.log(this.props);

    }
   
    render() {
        //读取保存的user
        const { user, token, isLogin } = this.props.userInfo
        if (!isLogin) {
            // this.props.history.replace('/login') // 事件回调函数中进行路由跳转
            return <Redirect to='/login' />//自动跳转到指定的路由路径
        } else {


            return (

                <Layout className='adminContent' style={{height:'100%'}}>
                  

                    <Header  className='Header'>
                        
                    </Header>
                    <Space align="center"></Space>
                  
                    <Layout className='dacontent'>
                        <Content className='Content'>
                            <Switch>
                                <Route path='/homepage' component={Homepage} />
                                <Route path='/article' component={Article} />
                                <Route path='/about' component={About} />
                                <Redirect to='/homepage' />
                            </Switch>

                        </Content>
                        <Sider className='Sider' >
                            <LeftNav/>
                           
                        </Sider>
                       
                    </Layout>
                    <Footer className='Footer'>
                        <span>
                            命运总是不如人愿。但往往是在无数的痛苦中,在重重的矛盾和艰辛中,才使人成熟起来。
                        </span>
                    </Footer>
                </Layout>


            )
        }
    }
}
export default connect(
    state => ({ userInfo: state.userInfo }),
    {}
)(Admin)
