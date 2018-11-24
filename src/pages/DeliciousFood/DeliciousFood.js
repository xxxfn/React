import { connect } from 'react-redux';
import DeliciousFoodUI from './DeliciousFoodUI';
import React, { Component } from 'react'
import axios from 'axios'
// import foodmain from './restaurants'

import { Toast } from 'antd-mobile';
class DeliciousFood extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      Alllist: [],
      foodlist: [],
      tab: [],
      foodmain: [],
      Liindex: 0,
      border1: false,
      imagb: 'https://fuss10.elemecdn.com/',
      image: '?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/'
    }
    this.ChangthisA = this.ChangthisA.bind(this);
    this.changelist = this.changelist.bind(this);
  }

  ChangthisA = (index) => {
    this.setState({
      a: index
    })
  }

  changelist() {
    var alllist = this.state.Alllist
    var foodlist = alllist[`${this.state.a}`].sub_categories
    this.setState({
      foodlist: foodlist
    })
  }
  switchBorder1() {
    this.setState({ border1: !this.state.border1 });
  }
  changelibottom(index){
    this.setState({
      Liindex:index
    })
  }

  handleScroll(e){
    let clientHeight = e.target.clientHeight; //可视区域高度
    let scrollTop  = e.target.scrollTop;  //滚动条滚动高度
    let scrollHeight = e.target.scrollHeight; //滚动内容高度
    if((clientHeight+scrollTop) >= (scrollHeight-1)){ //如果滚动到底部
      console.log('数据即将刷新')
      Toast.loading('Loading...',2, () => {
        console.log('Load complete !!!');
      });
      setTimeout(() => {
        let Tab = this.state.foodmain
        this.state.foodmain.map((item, index) => {
          Tab.push(item)
          return (
            console.log('数据正在更新')
          )
        })
        this.setState({
          foodmain: Tab
        })
      }, 2000);
    }
  }

  render() {
    return (<DeliciousFoodUI ChangthisA={this.ChangthisA} handleScroll={this.handleScroll.bind(this)} changelibottom={this.changelibottom.bind(this)} switchBorder1={this.switchBorder1.bind(this)}  changelist={this.changelist} {...this.state} />)
  }

  componentDidMount() {
    // 开始刷新
    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    });
    var api = "https://bird.ioliu.cn/v1?url="
    axios.get(api + 'https://www.ele.me/restapi/shopping/v2/restaurant/category?latitude=22.533719&longitude=113.936091')
      .then((response) => {
        var foodlist = response.data.slice(1)
        var newfoodlist = foodlist[`${this.state.a}`].sub_categories
        this.setState({
          Alllist: foodlist,
          foodlist: newfoodlist
        })
        var tabs = []
        this.state.foodlist.map((item, index) => {
          var Tab = item.name
          var Tabs = { "title": Tab }
          tabs.push(Tabs)
          return (
            console.log('期望的函数')
          )
        })
        this.setState({
          tabs: tabs
        })
      })
      .catch(function (error) {
        console.log(error, '有错');
      });

    axios.get(api + 'https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=ws100wjsrmej&latitude=22.533719&limit=24&longitude=113.936091&offset=0&restaurant_category_ids%5B%5D=-100&sign=1543024570502&terminal=web')
      .then((response) => {
        this.setState({
          foodmain:response.data
        })
        console.log(response)
        // 结束刷新
        Toast.hide();
      })
      .catch(function (error) {
        console.log(error, '有错');
      });
  }

}

const mapStateToProps = (state) => {
  return {
    a: state.DeliciousFood.title,
    src: state.Order.src,
    list: state.DeliciousFood.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changrlist: (list) => {
      dispatch({
        type: 'CHANCG_LIST',
        value: list
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliciousFood);
