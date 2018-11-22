// 这个是 home ui 组件
import React from 'react';
import './My.scss';
import Footer from '../../components/Footer/index';
import {NavLink} from 'react-router-dom';


const MyUI = (props) => {
    return (
      <div className="my">
       <div className="elm-home">
          <div className="zxs-head">
           <img src={props.imgs1} alt='' className="zxs-headerimg"/>
           我的
          </div>
          <div className="zxs-profile">
           <img src={props.imgs2} alt="" className="zxs-tou"/>
           <div className="zxs-p">
             <NavLink to="/register" className="zxs-register">{props.head}</NavLink>
             <p className="register-p1">{props.headp}</p>
             <p className="register-p2" onClick={props.onclick}>{props.remove}</p>
             <img src={props.imgs3} alt='' className="zxs-img3" />
            </div>

          </div>
          <ul className="zxs-maininfo">
            <li><span>钱包</span></li>
            <li><span>红包</span></li>
            <li><span>金币</span></li>
          </ul>
          <div className="address">
            <span>我的地址</span>
            <img src={props.imgs4} alt='' className="huiyou1" />
          </div>
          <ul className="share">
            <li>金币商城<img src={props.imgs4} alt='' /></li>
            <li>分享拿10元现金<img src={props.imgs4} alt='' /></li>
          </ul>
          <ul className="link">
            <li>我的客服<img src={props.imgs4} alt='' /></li>
            <li>下载饿了么APP<img src={props.imgs4} alt='' /></li>
          </ul>
       </div>
        <Footer />
      </div>
    )


}

export default MyUI;
