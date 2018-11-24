import { connect } from 'react-redux';
import HomeUI from './HomeUI';
import React,{Component} from 'react';
import axios from 'axios'
import { Toast } from 'antd-mobile';

const proxy = "https://bird.ioliu.cn/v1/?url=";
class Home extends Component {
  constructor(props) {
    super(props)
    this.state={
      entries:[],
      banner:[],
      restaurant:[],
      position:{},
      flag:false
    }
  }
  cfjclick(){
    var a = this.state.flag
    var b = !a;
    this.setState=({
      flag:b
    })
    console.log(b)
  }
  render() {
    return (<HomeUI {...this.state} cfjclick={this.cfjclick.bind(this)} />)
  }
  componentDidMount() {
    // 开始刷新
    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    });
    axios.get('https://bird.ioliu.cn/ip')
      .then(result => {
        var ip = result.data.data.ip
        axios.get(`https://bird.ioliu.cn/v2/?url=https://apis.map.qq.com/ws/location/v1/ip?ip=${ip}&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU`).then(result =>{

          this.setState({
            position:result.data.result
          })
          var lat = result.data.result.location.lat;
          var lng = result.data.result.location.lng;
          axios.get(proxy + `https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=ws100wjsrmej&latitude=${lat}&limit=8&longitude=${lng}&offset=0&terminal=web`)
            .then(result => {
              console.log(result)
              console.log('aaa')
              this.setState({
                restaurant: result.data
              })
            })
          axios.get(proxy + `https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=${lat}&longitude=${lng}`)
            .then(result => {
              console.log(result)
              this.setState({
                banner: result.data
              })
            })
          axios.get(proxy + `https://h5.ele.me/restapi/shopping/v2/entries?latitude=${lat}&longitude=${lng}&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5`)
            .then(result => {
              console.log(result)
              this.setState({
                entries: result.data[0].entries
              })
              // 结束刷新
              Toast.hide();
            })

        })
      })

  }
}

const mapStateToProps = ({ Home }) => {
  return {
    data: Home.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
