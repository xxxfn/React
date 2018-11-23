// 这个是 home ui 组件
import React from 'react';
import './DeliciousFood.scss';
import { NavLink } from 'react-router-dom';

const DeliciousFoodUI = (props) => {

  const btnStyle1 = {
    display: props.border1 ? 'block' : 'none'
  }

  return (
    <div className="DeliciousFood">
      <div style={btnStyle1} className="zhezhaoceng"></div>
      <div style={btnStyle1} className="Foodlist">
        <div className="foodheader">
          <p>请选择分类</p>
          <button onClick={props.switchBorder1}> x </button>
        </div>
        <div className="Allfood">
          <div className="AllfoodLeft">
            <ul>
              {
                props.Alllist.map((item, index) => {
                  return (
                    <li
                     key={index}
                     onClick={() => {
                       props.ChangthisA(index)
                       props.changelist()
                      }}
                     >
                      <span>{item.name}</span>
                      <span>{item.count}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="AllfoodRight">
            <ul>
              {
                props.foodlist.map((item, index) => {
                  return (
                    <li onClick={props.switchBorder1} key={index}>
                      <img src={props.imagb + item.image_url + `${/jpeg/.test(item.image_url) === true ? '.jpeg' : '.png'}` + props.image} style={{ width: '30px' }} alt="" />
                      <span>{item.name}</span>
                      <span>{item.count}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="Foodmain">

        <div className="flexParent">
          <div className="Flex">
            <div className="FoodHeight">
              <NavLink to="/">
                <button className="iconfont icon-iconfontfanhui1" />
              </NavLink>
              <span> 美食</span>
            </div>
            <div className="foodact">
              <div >
                <ul className="foodactUl">
                  {
                    props.foodlist.map((item, index) => {
                      return (
                        <li
                        key={index}
                        onClick={()=>{
                          props.changelibottom(index)
                        }}
                        className={props.Liindex === index ? "libottom" : ''}
                        >
                          <NavLink
                            to="/DeliciousFood"
                            activeStyle={{color:'#ffffff',borderBottom:'#ffffff'}}
                          >
                            <span>{item.name}</span>
                          </NavLink>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <button className="iconfont icon-xiangxia2" onClick={props.switchBorder1} ></button>
            </div>
          </div>
        </div>

        <div className="Scroll" onScroll={props.handleScroll}>
          {
            props.foodmain.map((item,index)=>{
              return(
                <div className="dianjia" key={index}>
                  <div className="dianjiaLeft">
                    <img src={props.imagb + item.restaurant.image_path + `${/jpeg/.test(item.restaurant.image_path) === true ? '.jpeg' : '.png'}` + props.image} alt="" />
                  </div>

                  <div className="dianjiaRight">
                    <div className="Rightone">
                      <h2>{item.restaurant.name}</h2>
                      <div>
                        <span className="iconfont icon-shouji"></span>
                        <i className="iconfont icon-ellipsis1"></i>
                      </div>
                    </div>

                    <div className="Rightwo">
                      <div>
                        <i className="iconfont icon-wujiaoxing" ></i>
                        <i className="iconfont icon-wujiaoxing" ></i>
                        <i className="iconfont icon-wujiaoxing" ></i>
                        <i className="iconfont icon-wujiaoxing" ></i>
                        <i className="iconfont icon-wujiaoxing" ></i>
                        <span>{item.restaurant.rating} 月售932单</span>
                      </div>
                      <p>蜂鸟专送</p>
                    </div>

                    <div className="Righthree">
                      <p>￥{item.restaurant.float_minimum_order_amount}起送|远距离配送费￥{item.restaurant.float_delivery_fee}</p>
                      <p>2.32Km|31分钟</p>
                    </div>

                    <div className="Rightfore">
                      <button>炸鸡炸串</button>
                      <button>品质联盟</button>
                    </div>

                    <div className="Rightfive">
                      <span className="orange">减</span>
                      <span>满25减22，满68减32，满128减58，...</span>
                      <span>23个活动</span>
                      <i className="iconfont icon-shixinsanjiao"></i>
                    </div>
                  </div>
                </div>
                )
              })
            }
        </div>

      </div>
    </div>
  )


}


export default DeliciousFoodUI;
