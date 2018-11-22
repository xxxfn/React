import React from 'react';
import './Details.scss';
import { Icon} from 'antd-mobile';
import Order from './Order.js';
import Evaluate from './Evaluate.js';
import Business from './Business.js';
const HomeUI = (props) => {
  return (
    <div id="all">
      <div className="app-dps8r">
        <div className="nav">
        </div>
        <div className="index-ccm5A">
          <div className="ph">
            <img src={props.imgs} alt=""/>
          </div>
          <div className="title">
            <h2 className="tith">{props.data.restaurant && props.data.restaurant.name}</h2>
            <div className="titb">
              <span>评价：{props.data.restaurant && props.data.restaurant.rating}</span>
              <span>月销售：{props.data.restaurant && props.data.restaurant.recent_order_num}
              单</span>
              <span>蜂鸟快送约{props.data.restaurant && props.data.restaurant.order_lead_time}分</span>
            </div>
            <div className="you">
              <span className="smil"
              style={{backgroundColor:`#${props.data.restaurant&&props.data.restaurant.activities[0].icon_color}`}}>
                {(props.data.restaurant && props.data.restaurant.activities[0].icon_name==="首")?"首单":"满减"}
              </span>
              <span className="jian">
                {props.data.restaurant && props.data.restaurant.activities[0].description}
                (不与其他活动共享)
              </span>
              <span className="hui">
              {props.data.restaurant && props.data.restaurant.activities.length}个优惠券
              <Icon type="down" size="xxs"></Icon>
              </span>
            </div>
            <p className="notice">
              {props.data.restaurant && props.data.restaurant.promotion_info}
            </p>
          </div>
        </div>
      </div>
      {/* <Tabs tabBarPosition="top"
      tabs={
        [
          { title: '点餐' },
          { title: '评价' },
          { title: '商家' }
        ]
      }
      initialPage="1"
      swipeable={false}
      >
        <div style={{backgroundColor: '#fff' }}>
          <Order list={props.list} morelist={props.morelist} food={props.food}></Order>
        </div>
        <div style={{backgroundColor: '#fff' }}>
        <Evaluate list={props.list}></Evaluate>
        </div>
        <div style={{backgroundColor: '#fff' }}>
        <Business list={props.list}></Business>
        </div>
      </Tabs> */}
      <div className="naveli">
        <div className="heade">
          <ul className="navil">
            <li onClick={()=>{props.change(1)}}>
              <p className={props.nav===1?"liact":""}>点餐</p>
            </li>
            <li onClick={()=>{props.change(2)}}>
              <p className={props.nav===2?"liact":""}>评价</p>
            </li>
            <li onClick={()=>{props.change(3)}}>
              <p className={props.nav===3?"liact":""}>商家</p>
            </li>
          </ul>
        </div>
        <div style={{backgroundColor: '#fff' }} className={props.nav===1?"zact":"hid"}>
        <Order list={props.list} morelist={props.morelist} food={props.food}></Order>
        </div>
        <div style={{backgroundColor: '#fff' }} className={props.nav===2?"zact":"hid"}>
        <Evaluate list={props.list}></Evaluate>
        </div>
        <div style={{backgroundColor: '#fff' }} className={props.nav===3?"zact":"hid"}>
        <Business list={props.list}></Business>
        </div>
      </div>
    </div>
    )
}

export default HomeUI;