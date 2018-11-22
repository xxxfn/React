// 这个是 home ui 组件
import React from 'react';
import './Home.scss';
import Footer from '../../components/Footer/index';
import { NavLink } from 'react-router-dom';


const HomeUI = (props) => {
  return (
    <div className="home">
      <div className="elm-home">
        <p>这是首页</p>
        <br />
      <NavLink to="/DeliciousFood">美食节</NavLink>
      </div>
      <Footer></Footer>
    </div>
    )
}

export default HomeUI;
