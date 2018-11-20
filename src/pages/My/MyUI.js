// 这个是 home ui 组件
import React from 'react';
import './My.scss';
import Footer from '../../components/Footer/index';
import {NavLink} from 'react-router-dom';


const MyUI = (props) => {
  return (
    <div className="my">
     <div className="elm-home">
      <NavLink to="/register">注册</NavLink>
      <NavLink to="/login">登录</NavLink>

     </div>
      <Footer />
    </div>
  )
}

export default MyUI;
