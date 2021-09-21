import React,{Component} from 'react';
import {Menu} from 'antd'
import { FormOutlined} from '@ant-design/icons';
import './main.less'
export default class HeadNav extends Component {
    state = {
        current: 'home',
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        {/* <Icon type="global" className="nav-logo" /> */}
                        <FormOutlined className="nav-logo"/>
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                首页
                            </Menu.Item>
                            <Menu.Item key="aboutme">
                                关于我
                            </Menu.Item>
                            <Menu.Item key="article">
                                文章分享
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <a href='www.baidu.com'>资源共享</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}