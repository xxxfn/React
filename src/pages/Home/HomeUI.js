// 这个是 home ui 组件
import React from 'react';
import './Home.scss';
import Footer from '../../components/Footer/index';


const HomeUI = (props) => {
  return (
    <div className="home">
      <div className="elm-home">
        这是首页
      </div>
      <Footer></Footer>
    </div>
    )
}

export default HomeUI;
