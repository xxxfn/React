import React from 'react';
import './Details.scss';
// import { url } from 'inspector';
const HomeUI = (props) => {
  return (
    <div>
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
              <span>蜂鸟快送约30分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomeUI;
