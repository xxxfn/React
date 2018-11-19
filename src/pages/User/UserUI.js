// 这个是 home ui 组件
import React from 'react';
import './User.scss';
import Footer from '../../components/Footer/index';


const UserUI = (props) => {
  return (
    <div className="user">
      <div className="elm-home">
        这是用户页面
      </div>
      <Footer />
    </div>
  )
}

export default UserUI;
