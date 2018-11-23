import { connect } from 'react-redux';
import HomeUI from './HomeUI';
import React,{Component} from 'react';
import axios from 'axios'
// import { Result } from 'antd-mobile';

const proxy = "https://bird.ioliu.cn/v1/?url=";
class Home extends Component {
  constructor(props) {
    super(props)
    this.state={
      entries:[],
      banner:[],
      restaurant:[],
      position:{}
    }
  }

  render() {
    return (<HomeUI {...this.state} />)
  }
  componentDidMount() {
    // axios.get('https://bird.ioliu.cn/ip')
    //   .then(result => {
    //     var lat = result.data.data.location.lat;
    //     var lng = result.data.data.location.lng;

    //   })

    // axios.get('https://bird.ioliu.cn/ip')
    //   .then(result => {
    //     var lat = result.data.data.location.lat;
    //     var lng = result.data.data.location.lng;

    //   })

      //https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.533719&longitude=113.936091&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
    // axios.get('https://bird.ioliu.cn/ip')
    //   .then(result =>{

    //   })
    //https://bird.ioliu.cn/v2/?url=https://apis.map.qq.com/ws/location/v1/ip?ip=113.92.93.53&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU
    axios.get('https://bird.ioliu.cn/ip')
      .then(result => {
        var ip = result.data.data.ip
        axios.get(`https://bird.ioliu.cn/v2/?url=https://apis.map.qq.com/ws/location/v1/ip?ip=${ip}&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU`).then(result =>{

          this.setState({
            position:result.data.result
          })
          var lat = result.data.result.location.lat;
          var lng = result.data.result.location.lng;
          axios.get(proxy + `https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=${lat}&longitude=${lng}&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5`)
            .then(result => {
              // console.log(result)
              this.setState({
                restaurant: result.data.items
              })
            })
          axios.get(proxy + `https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=${lat}&longitude=${lng}`)
            .then(result => {
              // console.log(result)
              this.setState({
                banner: result.data
              })
            })
          axios.get(proxy + `https://h5.ele.me/restapi/shopping/v2/entries?latitude=${lat}&longitude=${lng}&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5`)
            .then(result => {
              // console.log(result)
              this.setState({
                entries: result.data[0].entries
              })
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
