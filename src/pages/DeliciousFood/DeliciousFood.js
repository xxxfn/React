import { connect } from 'react-redux';
import DeliciousFoodUI from './DeliciousFoodUI';
import React, { Component } from 'react'
import axios from 'axios'


class DeliciousFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      Alllist: [],
      foodlist: [],
      tab: [],
      foodmain:[],
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
      }, 3000);

      //  var api = "https://bird.ioliu.cn/v1?url="
      // axios.get(api + 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.621544&longitude=113.839746&keyword=&offset=0&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=42f1109daa344653b4ce41ce1006831d&brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264')
      //   .then((response) => {
      //     var foodmain = response.data.items
      //     let Tab = this.state.foodmain
      //     foodmain.map((item, index) => {
      //       Tab.push(item)
      //       return (
      //         console.log('期望的函数')
      //       )
      //     })
      //     this.setState({
      //       foodmain: Tab
      //     })
      //   })
      //   .catch(function (error) {
      //     console.log(error, '有错');
      //   });
    }
  }

  render() {
    return (<DeliciousFoodUI ChangthisA={this.ChangthisA} handleScroll={this.handleScroll.bind(this)} changelibottom={this.changelibottom.bind(this)} switchBorder1={this.switchBorder1.bind(this)}  changelist={this.changelist} {...this.state} />)
  }

  componentDidMount() {
    var api = "https://bird.ioliu.cn/v1?url="
    axios.get(api + 'https://h5.ele.me/restapi/shopping/v2/restaurant/category?latitude=22.621544&longitude=113.839746')
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

    axios.get(api + 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.621544&longitude=113.839746&keyword=&offset=0&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=42f1109daa344653b4ce41ce1006831d&brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264')
      .then((response) => {
        this.setState({
          foodmain:response.data.items
        })
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
