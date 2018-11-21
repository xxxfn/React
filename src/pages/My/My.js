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
  }
  render(){
    return(
      <MyUI imgs1={this.state.imgs1} imgs2={this.state.imgs2} imgs3={this.state.imgs3} imgs4={this.state.imgs4} head={this.state.head} headp={this.state.headp} remove={this.state.remove} onclick={this.onclick.bind(this)}></MyUI>
    )
  }
  componentDidMount(){

    function getCookie (key) {
      var cookieStr = document.cookie
      var arr = cookieStr.split('; ')
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].split('=')[0] === key) {
          return arr[i].split('=')[1]
        }
      }
      return ''
    }
    // var username=getCookie('username');
    if(getCookie('username')){
      this.setState({
        head:`用户:${getCookie('username')}`,
        headp:`ID:${getCookie('id')}`,
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
  onclick(){
      console.log(1)
      document.cookie = 'username=; expires=' + new Date(0);
      document.cookie = 'id=; expires=' + new Date(0);
      function getCookie (key) {
        var cookieStr = document.cookie
        var arr = cookieStr.split('; ')
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].split('=')[0] === key) {
            return arr[i].split('=')[1]
          }
        }
        return ''
      }
      if(getCookie('username')){
        this.setState({
          head:`用户:${getCookie('username')}`,
          headp:`ID:${getCookie('id')}`,
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
}



const mapStateToProps = ({ My }) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
