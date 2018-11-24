import React,{Component} from 'react'
import { connect } from 'react-redux';
import MyUI from './MyUI';


class My extends Component{
  constructor(props){
    super(props);
    this.state={
      imgs1:require('../../images/zuojian.png'),
      imgs2:require('../../images/zxs-tou.png'),
      imgs3:require('../../images/youjian.png'),
      imgs4:require('../../images/huiyoujian.png'),
      head:'登录/注册',
      headp:'登录注册后享受更多特权',
      remove:''
    }
    this.getCookie=this.getCookie.bind(this);
  }
  getCookie (key) {
    var cookieStr = document.cookie
    var arr = cookieStr.split('; ')
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].split('=')[0] === key) {
        return arr[i].split('=')[1]
      }
    }
    return ''
  }
  render(){
    return(
      <MyUI registers={this.registers.bind(this)} imgs1={this.state.imgs1} imgs2={this.state.imgs2} imgs3={this.state.imgs3} imgs4={this.state.imgs4} head={this.state.head} headp={this.state.headp} remove={this.state.remove} onclick={this.onclick.bind(this)} back={this.back.bind(this)}></MyUI>
    )
  }

  registers(){
    if(this.getCookie('username')){
      this.props.history.push('/my');
    }else{
      this.props.history.push('/register');
    }
  }
  componentDidMount(){
    if(this.getCookie('username')){
      this.setState({
        head:`尊敬的用户${this.getCookie('username')}`,
        headp:`ID:${this.getCookie('id')}`,
        remove:'退出登录'
      })
    }else{
      this.setState({
        head:'登录/注册',
        headp:'登录注册后享受更多特权',
        remove:''
      })
    }
  }
  back(){
    this.props.history.goBack();
  }
  onclick(){
      console.log(1)
      document.cookie = 'username=; expires=' + new Date(0);
      document.cookie = 'id=; expires=' + new Date(0);
      if(this.getCookie('username')){
        this.setState({
          head:`尊敬的用户${this.getCookie('username')}`,
          headp:`ID:${this.getCookie('id')}`,
          remove:'退出登录'
        })
        this.props.history.push('/my');
      }else{
        this.setState({
          head:'登录/注册',
          headp:'登录注册后享受更多特权',
          remove:''
        })
      }
  }
}



const mapStateToProps = ({ My }) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
