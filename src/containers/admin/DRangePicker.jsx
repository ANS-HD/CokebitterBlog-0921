import React from 'react'
import { DatePicker, Radio, Button } from 'antd';
import './rili.less'
import moment from 'moment';
// import style from './Times.module.less'
// import './rili.less'
class Times extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        week:'',
        date:'',
        time:''
    };
    componentDidMount(){
        this.getCurDate()
    }
    // 单位数字补0
    add_zero = (temp) => {
        if(temp<10) return "0"+temp;
        else return temp;
    }
    // 获取当前日期时间
    getCurDate = () => {
        let d = new Date();
        let week;
        switch (d.getDay()){
            case 1: week="星期一"; break;
            case 2: week="星期二"; break;
            case 3: week="星期三"; break;
            case 4: week="星期四"; break;
            case 5: week="星期五"; break;
            case 6: week="星期六"; break;
            default: week="星期天";
        }
        let years = d.getFullYear();
        let month = this.add_zero(d.getMonth()+1);
        let days = this.add_zero(d.getDate());
        let hours = this.add_zero(d.getHours());
        let minutes = this.add_zero(d.getMinutes());
        let seconds=this.add_zero(d.getSeconds());
        let ndate = years + "-"+month + "-"+days
        let time = hours + ":" + minutes+":" + seconds;
        
        this.setState({
            week,
            date:ndate,
            time
        })
        setTimeout(this.getCurDate, 1000)
    }
    // 选择日期
    chooseDate = (date, dateString) => {
        console.log(date, dateString);
    }
    disabledDate = (current)=> {
        // 不能选择当天以后的
        return current > moment().endOf(this.state.date);
    }
    render(){
        // const today = moment();
        return(
            <div className='Timer'>
                <div >
                    <div>{this.state.date}</div>
                    <div>{this.state.week}</div>
                </div>
               <div >{this.state.time}</div>
                
            </div>
        )
    }
}
export default Times;
