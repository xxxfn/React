import React,{Component} from 'react'
import { connect} from 'react-redux';
import DetailsUI from './DetailsUI.js';
import axios from 'axios';

class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      api:"https://bird.ioliu.cn/v1?url=",
      data:{},
      imgs:'',
      list:[],
      morelist:[],
      nav:1
    }
  }
  change(index){
    console.log(index);
    this.setState({
      nav:index
    })
  }
  render(){
    return(
      <DetailsUI data={this.state.data} imgs={this.state.imgs} list={this.state.list}
      morelist={this.state.morelist } change={this.change.bind(this)} nav={this.state.nav}
      ></DetailsUI>
    )
  }
  componentDidMount(){
    var id=this.props.match.params.id || "E12006081213081270247";
    var offset=this.props.match.params.offset || 0;
    var _this=this;
    axios.get(this.state.api+`https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.54286&longitude=114.059563&offset=${offset}&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5`).then(result=>{
       var res=result.data;
       console.log(id);
       console.log(res);
       if(res.has_next){
         for(var i=0;i<res.items.length;i++){
           if(res.items[i].restaurant.id===id){
             var url=res.items[i].restaurant.image_path;
             var reg=/png$/;
             console.log(reg.test(url));
             var src=""
             if(reg.test(url)){
                src="https://fuss10.elemecdn.com/"+url+".png";
             }else{
                src="https://fuss10.elemecdn.com/"+url+".jpeg";
             }
             _this.setState({
              imgs:src,
              data:res.items[i]
             })
           }
         }
       }
    })
    axios.get("/api/batch_shop.json").then(result=>{
      _this.setState({
        list:result.data[0],
        morelist:result.data[1],
      })
      console.log(this.state.morelist[0].food[0])
    })
  }
}

const mapStateToProps=({Details})=>{
  return{
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)