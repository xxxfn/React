// 这个是 home ui 组件
import React from 'react';
import './Order.scss';
import Footer from '../../components/Footer/index';
import { Order,Elmorder } from './style.js';
import { NavLink } from 'react-router-dom';

const OrderUI = (props) => {
  return (
    <Order>
      <Elmorder>
        <div className="Header">
          <div className="OrderHeader">
            <NavLink to="/">
              <button className="iconfont icon-iconfontfanhui1"></button>
            </NavLink>
            <span>订单</span>
          </div>
        </div>

        <div className="OrderMain">
          {
            props.orderlist.map((item,index)=>{
              return(
                <div className="Ordermains" key={index}>
                  <div className="MainTop">
                    <img src={props.imagb + item.img + `${/jpeg/.test(item.img) === true ? 'jpeg' : 'png'}`+ props.image} style={{ width: '30px' }} alt="" />
                    <div className="maintoptop">
                      <div className="maintoptopome">
                        <div>
                          <p className="qianqiu">{item.name}}</p>
                          <p className="thetime">{item.time}}</p>
                        </div>
                        <span className="orderover">订单已发送</span>
                      </div>
                      <div className="maintoptoptwo" >
                        <span>{item.food}}</span>
                        <p>{item.many}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Mainbottom">
                    <button>再来一单</button>
                  </div>
                </div>
              )
            })
          }
        </div>

      </Elmorder>
      <Footer></Footer>
    </Order>
  )

}

export default OrderUI;
