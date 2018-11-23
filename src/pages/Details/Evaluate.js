import React,{Component } from 'react'
import './evaluate.scss'

class Evaluate extends Component{
  constructor(props){
    super(props);
    this.state={
      list:["全部 920","满意 815","不满意 33","有图 112","味道好 70","不好吃 20"],
      data:0
    }
  }
  btn(index){
    this.setState({
      data:index
    })
  }
  render(){
    return(
      <div className="ping">
        <div className="overciew">
          <p className="fen">4.6</p>
          <div className="shop">
            <span>商品评分</span>
          </div>
          <div className="bw">
            <span>味道</span>
            <p>4.5</p>
          </div>
          <div className="bw">
            <span>包装</span>
            <p>4.6</p>
          </div>
          <div className="bw last">
            <span>配送</span>
            <p>4.7</p>
          </div>
        </div>
        <div className="lflist">
          <ul className="btu">
            {
              this.state.list.map((item,index)=>{
                return(
                  <li key={index} onClick={this.btn.bind(this,index)} className={index===this.state.data?"act":""}>{item}</li>
                )
              })
            }
          </ul>
          <p className="conten">只看有内容的评价</p>
          <ul>
            <li className="pinlun">
              <div className="comment">
                <div className="conmmneam">
                </div>
                <div className="neir">
                  <div className="nerhead">
                    <h3>3*******3</h3>
                    <div className="time">2018-11-21</div>
                  </div>
                  <div className="zhan">
                    <span>超赞</span>
                  </div>
                  <div className="eat">春饼好吃下次还点</div>
                  <div className="speak">
      商家回复：外卖小哥装载着我们满满的祝福，风驰电掣向您本来~~穿越风和雨只为了给亲亲送上我们的美美的美食，亲亲喜欢下次再来哦！！
                </div>
                  <ul className="imgname">
                    <li>
                      <img src="https://fuss10.elemecdn.com/5/35/f229acfed5ca72b62bbfa52fcf8d3jpeg.jpeg?imageMogr/format/webp/thumbnail/300x/" alt="1"></img>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Evaluate;
