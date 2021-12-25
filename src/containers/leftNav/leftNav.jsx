import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import logo from '../../assets/imgs/ChatHead.jpg'
import { Menu, Button } from 'antd';
import {

    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,

} from '@ant-design/icons';
import './main.less'
// const { SubMenu } = Menu;
 class LeftNav extends Component {
    state = {
        current: 'home',
    }
    render() {
        
        
        const menulist =[{}]
        //得到当前请求的路由路径

        const path = this.props.location.pathname
        console.log('render()',path);
        return (
            <div id="left-nav">
                <div className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>可乐很苦</h1>
                </div>
                <Menu
                    mode="inline"
                    theme="light"
                    selectedKeys={[path]}
                // defaultOpenKeys={['sub1']}

                >
                    <Menu.Item key="/homepage" icon={<PieChartOutlined />}>
                        <Link to='/homepage'>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/article" icon={<DesktopOutlined />}>
                        <Link to='/article'>
                            <span>文章</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/about" icon={<ContainerOutlined />}>
                        <Link to='/about'>
                            <span>个人中心</span>
                        </Link>
                    </Menu.Item>
                </Menu>

            </div>
        )
    }

}
//withRouter高阶组件：
//包装非路由组件  返回一个新的组件  新的组件向非路由组件传递三个属性   history  location  match
export default withRouter(LeftNav)