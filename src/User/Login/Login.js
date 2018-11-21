import React,{ Component } from 'react';
import '../Register/register.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      imgs:require('../../images/register_logo.png'),
      inputVal1:'',
      inputVal2:''
    }
  }
  render(){
    return(
     <div className="zxs">
       <img src={this.state.imgs} alt="1" className="zxs-img" />
         <div className="zxs-all">
            <form className="zxs-form">
                <input type="text" placeholder="用户名" className="zxs-txt"  onChange={this.onchange1.bind(this)} onFocus={this.onfocus1.bind(this)} onBlur={this.onblur1.bind(this)} value={this.state.inputVal1}/>
                <span className="info_user" ref="info_user">请输入用户名2~20位，由字母、数字和下划线组成</span>
                <span className="error_user" ref="error_user">输入不合法，请重新输入!</span>
                <span className="succ_user" ref="succ_user">可用</span>
                <input type="password" placeholder="密码" className="zxs-pwd" onChange={this.onchange2.bind(this)} onFocus={this.onfocus2.bind(this)} onBlur={this.onblur2.bind(this)} value={this.state.inputVal2}/>
                <span className="info_pwd" ref="info_pwd">请输入密码3~20位，由字母、数字和下划线组成</span>
                <span className="error_pwd" ref="error_pwd">输入不合法，请重新输入!</span>
                <span className="succ_pwd" ref="succ_pwd">可用</span>
                <p className="zxs-p">新用户登录，并表示已同意<span>《用户服务协议》</span></p>
                <button className="zxs-btn1" onClick={this.zxslogin.bind(this)}>登录</button>
                <button className="zxs-btn2"><Link to="/register" className="zxs-a">没有账号?</Link></button>
            </form>
          </div>
     </div>
    )
  }
  onchange1(e){
    //2~20位 由字母、数字和下划线组成
    console.log(e.target);
    this.setState({
      inputVal1:e.target.value,
    })
  }
  onfocus1(){
    this.refs.info_user.style.display="block";
    this.refs.error_user.style.display="none";
    this.refs.succ_user.style.display="none";
  }
  onblur1(){
    var unameReg = /^\w{2,20}$/;
    this.refs.info_user.style.display="none";
    if(unameReg.test(this.state.inputVal1)){//返回true，用户名合法
      this.refs.succ_user.style.display="block";
      this.refs.error_user.style.display="none";
    }else{
      this.refs.succ_user.style.display="none";
      this.refs.error_user.style.display="block";
    }
  }
  onchange2(e){
    //2~20位 由字母、数字和下划线组成
    console.log(e.target);
    this.setState({
      inputVal2:e.target.value,
    })
  }
  onfocus2(){
    this.refs.info_pwd.style.display="block";
    this.refs.error_pwd.style.display="none";
    this.refs.succ_pwd.style.display="none";
  }
  onblur2(){
    var unameReg = /^\w{3,20}$/;
    this.refs.info_pwd.style.display="none";
    if(unameReg.test(this.state.inputVal2)){
      this.refs.succ_pwd.style.display="block";
      this.refs.error_pwd.style.display="none";
    }else{
      this.refs.succ_pwd.style.display="none";
      this.refs.error_pwd.style.display="block";
    }
  }
  zxslogin(){
    let username=this.state.inputVal1;
    let password=this.state.inputVal2;
    if(username===''||password===''){
      alert('用户名或密码不能为空');
    }else{
      axios.post('http://localhost:4000/login', {
        username: username,
        password: password
      }, {
      }).then(res => {
        var result = res.data;
        if (result.code === 0) {
          // 登录成功
          alert('登录成功');
          var id = Math.ceil(Math.random() * 100000 + 899999)
          document.cookie = `username = ${username}`
          document.cookie = `id = ${id}`
          this.props.history.push('/my');
        } else if(result.code === -2){
          alert('用户名或密码错误');
        }else{
          alert('登录失败');
        }
      })
    }
  }
}
export default Login;
