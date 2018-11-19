// 这个是 home ui 组件
import React from 'react';
import './Order.scss';
import Footer from '../../components/Footer/index';

const OrderUI = (props) => {
  return (
    <div className="order">
      <div className="elm-home">
        这是订单页
      </div>
      <Footer></Footer>
    </div>
  )
}

export default OrderUI;
