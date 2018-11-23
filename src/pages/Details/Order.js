import React,{Component,Fragment} from 'react'
import './order.scss'

class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      data:0,
    }
  }
  tiao(index){
    console.log(index);
    document.querySelector(`#title${index}`).scrollIntoView(true);
    this.setState({
      data:index
    })
  }
  scoll(e){
    // console.log( e.target.scrollTop);
    // console.log(document.querySelector(`#title${1}`).offsetTop-480);
    for(var i=0;i<this.props.morelist.length;i++){
      // console.log(document.querySelector(`#title${i}`).offsetTop-480);
      if(document.querySelector(`#title${i}`).offsetTop-480 <= e.target.scrollTop+10 && document.querySelector(`#title${i}`).offsetTop-480 >= e.target.scrollTop-10){
        this.setState({
          data:i
        })
      }
    }
  }
  render(){
    return(
      <Fragment>
        <div className="recommend">
          <p className="recommend_bu">商家推荐</p>
          <div className="li">
          {
            this.props.list.map((item,index)=>{
              return(
                <div key={index} className="lire" onClick={()=>{this.props.bigx({"img":item.image_path,"name":item.name,"tit":item.tit,"price":item.specfoods[0].price})}}>
                  <img src={item.image_path} alt=""/>
                  <p className="nameli">{item.name}</p>
                  <p className="nies">
                    {item.tit}好评100%
                  </p>
                  <div className="food">
                    <div className="car">
                    <span>￥{item.specfoods[0].price}起</span>
                    <div className="ic"><i className="iconfont icon-icon02"></i></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
        <div className="morlist">
          <ul className="muneca">
         {
            this.props.morelist.map((item,index)=>{
              return(
                <li key={`11${index}`} onClick={this.tiao.bind(this,index)} className={index===this.state.data?"active":""}>{item.name}</li>
              )
            })
          }
         </ul>
          <div className="munu" onScroll={this.scoll.bind(this)}>
              {
                this.props.morelist.map((fitem,ind)=>{
                  return(
                    <Fragment key={ind}>
                      <div id={`title${ind}`} className="nametit">{fitem.name}</div>
                      {
                        fitem.food.map((fit,findx)=>{
                          return(
                            <ul key={findx}>
                              <li className="liname" onClick={()=>{this.props.bigx({"img":fit.image_path,"name":fit.name,"tit":fit.tips,"price":fit.price})}} >
                                <span className="ph">
                                  <img src={fit.image_path} alt="1"/>
                                </span>
                                <div className="left">
                                  <p className="nana">{fit.name}</p>
                                  <p className="zhuyi">{fit.description}</p>
                                  <p className="nice"><span>{fit.tips}</span><span>好评100%</span></p>
                                  <div className="jia">
                                    <span>￥{fit.price}</span>
                                    <div className="ico"><i className="iconfont icon-icon02"></i></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          )
                        })
                      }
                    </Fragment>
                  )
                })
              }
          </div>
        </div>
        <div className="foot">
          <span className="shoop"></span>
          <div className="shoppword">
              <span>未选购商品</span>
          </div>
          <div className="updata">
            <span>¥10起送</span>
          </div>
        </div>
        {/* <div className="show"></div> */}
      </Fragment>
    )
  }
}

export default Order;
