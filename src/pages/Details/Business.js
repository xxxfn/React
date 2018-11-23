import React,{Component} from 'react'
import './business.scss'

class Business extends Component{
  render(){
    return(
      <div className="businness">
        <div className="section">
          <img src="https://fuss10.elemecdn.com/3/d9/ca7d21a6bcd439f7f789f8e653a1apng.png" alt="1"/>
          <h3 className="delis">现熬更健康，更美味</h3>
          <p className="word">生活中的你我，匆匆忙碌，面对着喜乐悲欢，别无选择。
    对于他来说，妻子的那一场病，如同重击，击...</p>
          <div className="look">
            查看品牌故事
          </div>
        </div>
        <div className="section">
          <h3 className="song">配送信息</h3>
          <div className="delive">
            <div className="peishong">
              <span>由蜂鸟快送提供配送，约26分钟送达，距离1.2km</span>
            </div>
          </div>
          <div className="hua">配送费￥0</div>
        </div>
      </div>
    )
  }
}

export default Business;
