import React, { Component } from "react"
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/logo'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import Header from './header/header'
import './admin.less'
import Homepage from '../homepage/homepage'
import Article from '../article/article'
import About from '../about/about'

const { Footer, Sider, Content } = Layout
// const { SubMenu } = Menu;
export default class Admin extends Component {
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        return (
            <Layout className='adminContent'>
                <Header className='Header'>Header</Header>
                <Layout className='dacontent'>
                    <Sider className='Sider' >

                        <div className="cebian">
                            <div className='ChatHead'>
                                <Logo/>
                            </div>
                            <ul className='leftNav'>
                                <Button type=" Primary" ><Link to="/admin/homepage"><span>首页</span></Link> </Button>
                                <Button type=" Primary" ><Link to="/admin/about"><span>关于我</span></Link></Button>
                                <Button type=" Primary" ><Link to="/admin/article"><span>文章分享</span></Link></Button>
                            </ul>
                        </div>
                    </Sider>
                    <Content className='Content'>
                        <Switch>
                            <Route path='/admin/homepage' component={Homepage} />
                            <Route path='/admin/article' component={Article} />
                            <Route path='/admin/about' component={About} />
                          
                            <Redirect to='/admin/homepage' />
                        </Switch>
                       
                    </Content>
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
// connect(
//     state =>({peiqi:state.test}),
//     {
//         demo1:createDemo1Action
//     }
// )(Admin)