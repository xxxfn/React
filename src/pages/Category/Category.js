import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CategoryUI from './CategoryUI';
import axios from 'axios';

class Category extends Component{
  constructor(props){
    super(props);
    this.state={
      imgs1:require('../../images/zuojian.png'),
      imgs2:require('../../images/bigbag.webp'),
      imgs3:require('../../images/tenyuan.webp'),
      imgs4:require('../../images/smile.webp'),
      imgs5:require('../../images/nao.png'),
      list:[],

    }
  }
  render(){
    return(
      <CategoryUI imgs1={this.state.imgs1} imgs2={this.state.imgs2} imgs3={this.state.imgs3} imgs4={this.state.imgs4} imgs5={this.state.imgs5} list={this.state.list}></CategoryUI>
    )
  }
  componentDidMount(){
    const proxy = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(proxy+"https://h5.ele.me/restapi/member/gifts/suggest")
    .then(res=>{
      var result=res.data;
      var list=[];
      for(var i=0;i<3;i++){
        var item=result[i];
        list.push(item);
      }
      //console.log(result[0]);
      this.setState({
        list
      })
      console.log(1)
      console.log(this.state.list)
    })
  }
}
const mapStateToProps = ({ Category }) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
