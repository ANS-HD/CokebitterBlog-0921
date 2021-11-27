import React, { Component } from "react"
import { Menu, Dropdown, Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import './header.less'
import Times from '../DRangePicker'
import { Input, Space } from 'antd';
import { connect } from "react-redux"
// import { reqWeather } from "../../../api"

import { withRouter } from "react-router"

import {createdeleteUserInfoAction} from '../../../redux/action_creators/login_action'
const { Search } = Input;

class Header extends Component {
  
    // logout=()=>{
    //     console.log(1111);
    //     this.props.deleteUserInfo()

    // }


//     state={
//         wea:'',//天气
//         // wea_img:''//天气图片
//     } 
  
//      getweather= async()=>{
//         const {wea,wea_img}= await reqWeather(("北京").replace('\"',''))
//         //更新状态
//         console.log(wea,wea_img);
//         this.setState({wea,wea_img})
     
//   }
  getTitle=()=>{
      const path= this.props.location.pathname
  }
//   componentDidMount(){
//       this.getweather()
//   }
    render() {
    //    const {wea,wea_img} =this.state
        const onSearch = value => console.log(value);
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

                <div className="header-bottom">
                    <div className="header-bottom-left">
                        <div className='span1'>
                        
                        </div>
                        <span className='span2'>可乐很苦的Blog</span>
                    </div>
                    <div className="header-bottom-right">
                    {/* <button onClick={this.logout}>退出登录</button> */}
                    {/* <Button className='tuichu' onClick={this.logout}>退出登录</Button> */}
                        <div className="header-bottom-rightone">
                            <Times />

                        </div>
                        {/* <div className="header-bottom-righttwo">天气 : {wea} </div> */}
                       
                        <div className="header-bottom-rightthree">

                            <Button size='small' >
                                <PlayCircleOutlined />
                            </Button>
                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                <Button size='small'>歌曲选择</Button>
                            </Dropdown>


                        </div>
                        <div className="header-bottom-rightfore">
                            <Space direction="vertical">
                                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                            </Space>
                        </div>


                    </div>

                </div>
            </header>
        )
    }
}
export default withRouter(Header)