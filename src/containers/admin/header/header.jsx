import React, { Component } from "react"
import { Menu, Dropdown, Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import './header.less'
import Times from '../DRangePicker'
export default class Header extends Component {
    render() {
        const menu = (
            <Menu >
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                    <audio>鼓楼</audio>
                </Menu.Item>
            </Menu>
            );
        return (
            <header className='header'>
                <div className="header-top">
                    <span className='username'>欢迎来到我的Blog</span>
                    <Button size='small' >
                        <PlayCircleOutlined />
                    </Button>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <Button size='small'>歌曲选择</Button>
                    </Dropdown>
                  

                </div>
                <div className="header-bottom">
                <div className="header-bottom-left">
                    <span>可乐很苦的Blog</span>
                </div>
                <div className="header-bottom-right">
                   <Times/>
                    
                </div>

                </div>
            </header>
        )
    }
}