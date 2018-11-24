import { connect } from 'react-redux';
import OrderUI from './OrderUI';
import React,{Component} from 'react'
import { NavLink } from 'react-router-dom';

function getCookie(key) {
  var cookieStr = document.cookie
  var arr = cookieStr.split('; ')
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].split('=')[0] === key) {
      return arr[i].split('=')[1]
    }
  }
  return false
}

class Orders extends Component{
  constructor(props){
    super(props);
    this.state ={
      imagb: 'https://fuss10.elemecdn.com/',
      image: '?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/'
    };
  }

  render(){
    if (getCookie("username") ) {
      return (<OrderUI {...this.props} {...this.state} />)
    } else {
      return(
        <div style={{
          display:"flex",
          flexDirection:"column",
          // justifyContent:"",
          alignItems:"center"
        }}>
          <img
          src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
          style={{display:"block"}}
          alt=""
          />
          <h3>登录后查看外卖订单</h3>
          <NavLink to="/my">
            <button
            style={{
              marginTop:"20px",
              width:"70px",
              height:"50px",
              borderRadius:"5PX",
              backgroundColor: "#56d176",
              color: "#fff",
              textAlign: "center",
              fontSize: "12PX",
              fontFamily: "inherit"
            }}
            >
            立即登录
            </button>
          </NavLink>
        </div>
      )
    }
  }
  componentWillMount(){
    console.log(this.props.orderlist)
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

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
