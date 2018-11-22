
import React from 'react';
import './Category.scss';
import Footer from '../../components/Footer';

const CategoryUI = (props) => {

  return (
    <div className="category">
      <div className="elm-home">
        <div className="zxs-head">
            <img src={props.imgs1} alt='' className="zxs-headerimg"/>
            发现
        </div>
        <div className="zxs-cap">
          <div className="zxs-shop">
             <div className="content-wrapper">
                <p>金币商城</p>
                <p>0元好物在这里</p>
             </div>
             <img src={props.imgs2} alt='' className="zxs-imgs1"/>
          </div>
          <ul className="zxs-ul">
            <li>
              <div>
                <p>推荐有奖</p>
                <p>10元现金拿不停</p>
              </div>
              <img src={props.imgs3} alt=''/>
            </li>
            <li>
              <div>
                <p>周边优惠</p>
                <p>领取口碑好券</p>
              </div>
              <img src={props.imgs4} alt=''/>
            </li>
          </ul>
        </div>
        <div className="section">
          <div className="limittime">
            <span className="zxs-span1"></span>
            <span className="zxs-yuan1"></span>
            <img src={props.imgs5} alt='' />
            限时好礼
            <span className="zxs-span2"></span>
            <span className="zxs-yuan2"></span>
          </div>
          <p className="jinbi">金币换豪礼</p>
          <ul className="ulul">
            {
              props.list&&props.list.map((item,index)=>{
                return(
                  <li key={index} className="lili">
                    <span className="span1">{item.corner_marker}</span>
                    <img src={`https://fuss10.elemecdn.com/${item.image_hash}.jpeg`} alt=''/>
                    <p>3元饿了么红包</p>
                    <p><span>90金币</span><del>￥3</del></p>
                  </li>
                )
              })
              //console.log(html)
              //console.log(props.list.length)
            }
          </ul>
          <p className="more">查看更多&nbsp;></p>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default CategoryUI;
