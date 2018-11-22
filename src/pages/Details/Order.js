import React,{Component,Fragment} from 'react'
import './order.scss'

class Order extends Component{
  constructor(props){
    super(props)
    this.state={
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
                <div key={index} className="lire">
                  <img src={item.image_path} alt=""/>
                  <p className="nameli">{item.name}</p>
                  <p className="nies">
                    {item.tit}好评100%
                  </p>
                  <div className="food">
                    <p className="car">￥{item.specfoods[0].price}起</p>
                  </div>
                </div>
              )
            })
          }
           <div className="line"></div>
        </div>
        </div>
        <div className="morlist">
          <ul className="muneca">
         {
            this.props.morelist.map((item,index)=>{
              return(
                <li key={`11${index}`}><a>{item.name}</a></li>
              )
            })
          }
         </ul>
          <div className="munu">
              {
                this.props.morelist.map((fitem,ind)=>{
                  return(
                    <Fragment key={ind}>
                      <div id={`title${ind}`}>{fitem.name}</div>
                      {
                        fitem.food.map((fit,findx)=>{
                          return(
                            <ul key={findx}>
                              <li>1</li>
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
      </Fragment>
    )
  }
}

export default Order;
