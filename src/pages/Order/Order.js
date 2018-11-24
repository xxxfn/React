import { connect } from 'react-redux';
import OrderUI from './OrderUI';
import React,{Component} from 'react'
import axios from 'axios'


function onLogin (params) {
  document.cookie = `username = username`
}

class Order extends Component{
  constructor(porps){
    super(porps);
    this.state ={
      imagb: 'https://fuss10.elemecdn.com/',
      image: '?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/'
    }
  }
  componentDidUpdate(){
    onLogin()
  }

  render(){
    return (<OrderUI {...this.state} />)
    // if ( document.cookie.username ) {
    // } else {
    //   return(
    //     <div style={{
    //       display:"flex",
    //       flexDirection:"column",
    //       // justifyContent:"",
    //       alignItems:"center"
    //     }}>
    //       <img
    //       src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
    //       style={{display:"block"}}
    //       alt=""
    //       />
    //       <h3>登录后查看外卖订单</h3>
    //       <button
    //       style={{
    //         borderRadius:"5PX",
    //         backgroundColor: "#56d176",
    //         color: "#fff",
    //         textAlign: "center",
    //         fontSize: "12PX",
    //         fontFamily: "inherit"
    //       }}
    //         >
    //       立即登录
    //       </button>
    //     </div>
    //   )
    // }
  }
  componentDidMount(){
    // var api= "https://bird.ioliu.cn/v1?url="
    // axios.get(api +'https://h5.ele.me/restapi/bos/v2/users/173678507/orders?limit=8&offset=0')
    //   .then(function (response) {
    //     console.log(response,'拿到了');
    //   })
    //   .catch(function (error) {
    //     console.log(error,'有错');
    //   });
  }

}

const mapStateToProps = (state) => {
  return {
    a: state.Order.title,
    orderlist: state.Order.orderlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
