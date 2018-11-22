import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class Footer extends Component {
  render() {
    return (
      <ul className="elm-foot">
        <li>
          <NavLink to="/" exact>
            <i className="iconfont icon-elmyhq"></i>
            <span>首页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">
            <i className="iconfont icon-faxian"></i>
            <span>发现</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order">
            <i className="iconfont icon-icon--copy"></i>
            <span>订单</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my">
            <i className="iconfont icon-Dyanjing"></i>
            <span>我的</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Footer;
