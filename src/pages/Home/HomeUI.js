// 这个是 home ui 组件
import React from 'react';
// import { Injector } from 'ts-di';
// import { Injector } from '/path/to/node_modules/ts-di/dist/index.js';
// import { Text, View } from 'react-native';
import './Home.scss';
import { StickyContainer, Sticky } from 'react-sticky';
import { SearchBar, Grid, WingBlank, Carousel } from 'antd-mobile';
import Footer from '../../components/Footer/index';
import { NavLink } from 'react-router-dom';

const HomeUI = (props) => {
  const data = props.entries.map((item, index) => ({
    icon: `https://fuss10.elemecdn.com/${item.image_hash}.jpeg`,
    text: item.name,
  }));
  setTimeout(() => {
    console.log(props.position)
  }, 0);
  return (
    <div className="home">
      <div className="elm-home">
          <div className="cfj-header">
          <div className="cfj-adress"><i className="iconfont icon-location"></i>{props.position.ad_info && props.position.ad_info.district}</div>
          </div>
          <div className="cfj-seach"><SearchBar placeholder="搜索饿了么商家，商品名称" /></div>
          <WingBlank style={{"touchAction":"none"}}>
            <div className="cfj-home-activity">
            <Grid data={data}
              columnNum={5}
              isCarousel
              dotStyle={{ "width": 10, "height": 3 }}
              dotActiveStyle={{ "width": 10, "height": 3, "background": "blue" }}
              infinite
              hasLine={false}
              renderItem={dataItem => (
                <NavLink to="/DeliciousFood">
                  <div>
                    <img src={dataItem.icon} style={{ width: '45px', height: '45px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
                      <span>{dataItem.text}</span>
                    </div>
                  </div>
                </NavLink>
              )}
            />
              {/* <Grid data={data && data} isCarousel dotStyle={{ "width": 10, "height": 3 }} dotActiveStyle={{ "width": 10, "height": 3, "background": "blue" }} infinite hasLine={false} columnNum={5} /> */}
            </div>
          </WingBlank>
            {/* <Sticky>
              {({ style,wasSticky}) =>(
                <SearchBar style={{...style,background:"#0085ff",paddingBottom:6}} placeholder="搜索饿了么商家，商品名称" />
              )}
            </Sticky> */}
          <div className="cfj-banner">
            <WingBlank style={{"touchAction":"none"}}>
              <Carousel autoplay={true} autoplayInterval={1000} infinite dotStyle={{ "width": 10, "height": 3 }} dotActiveStyle={{ "width": 10, "height": 3, "background": "blue" }}>
                {/* <Carousel autoplay infinite autoplayInterval={1000}> */}
                {props.banner.map((item,index) => (
                    <img
                      key={index}
                      src={`https://fuss10.elemecdn.com/${item.image_hash}.jpeg`}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                      }}
                    />
                ))}
              </Carousel>
            </WingBlank>
          </div>
        <StickyContainer>
          <div className="cfj-recommend">
            <div className="cfj-recommend-tit">推荐商家</div>
            <Sticky>
              {({ style }) => (
                <ul style={{ ...style, top: 150, zIndex: 99, height: 40, top: 40,display:"flex",textAlign:"center",justifyContent:"space-around",lineHeight:"40px",background:"#FFF",borderBottom:"1px solid #ddd" }}>
                  <li>综合排序</li>
                  <li>距离最近</li>
                  <li>品质联盟</li>
                  <li>筛选<i className="iconfont icon-shaixuan"></i></li>
                </ul>
              )}
              {/* <div className="cfj-recommend-title">
              </div> */}
            </Sticky>
            <div className="cfj-recommend-list">
              <ul>
                {props.restaurant.map((item,index) =>(
                  // <NavLink to={`/details/${item.restaurant.id}/0`}>
                  <NavLink to={{ pathname: `/details/${item.restaurant.id}/0`, search: `?lat=${props.position.location && props.position.location.lat}&lng=${props.position.location && props.position.location.lng}`}}>
                    <li key={index}>
                      <div className="shopinfo">
                        <div className="shopimg">
                          <img src={`https://fuss10.elemecdn.com/${item.restaurant.image_path}.${/jpeg/.test(item.restaurant.image_path) === true ? 'jpeg' : 'png'}`} alt="" />
                        </div>
                        <div className="shopbody">
                          <h3 className="shopname">{item.restaurant.name}</h3>
                          <div className="shopnum">
                            <span style={{"width":item.restaurant.rating*12}}><svg width="60" height="10" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" y2="50%" id="a"><stop stop-color="#FFDE00" offset="0%" /><stop stop-color="#FFB000" offset="100%" /></linearGradient></defs><path d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z" fill="url(#a)" fill-rule="evenodd" /></svg></span>
                            <span className="ppp">{item.restaurant.rating}</span>
                            <span>月售{item.restaurant.recent_order_num}单</span>
                            <div style={{ "float": "right", "background": `#${item.restaurant.delivery_mode && item.restaurant.delivery_mode.gradient.rgb_to}`,"color":"#fff","marginRight":"15px","padding":"1px"}}>{item.restaurant.delivery_mode && item.restaurant.delivery_mode.text}</div>
                          </div>
                          <div className="shopprice">
                            <div>￥{item.restaurant.piecewise_agent_fee.rules[0].price}起送|{item.restaurant.piecewise_agent_fee.tips}</div>
                            <div>{(item.restaurant.distance/1000).toFixed(2)}km  |  {item.restaurant.order_lead_time}分钟</div>
                          </div>
                        </div>
                      </div>
                      <div className="shopactive">
                        <div className="shoptag">
                          <span style={{ "border": "1px solid #999" }}>{item.restaurant.support_tags[0].text}</span><span style={{ "border": item.restaurant.support_tags[1] && "1px solid #999"}}>{item.restaurant.support_tags[1] && item.restaurant.support_tags[1].text}</span>
                        </div>
                        <div className="nowactive">
                          <span style={{ "background": `#${item.restaurant.activities[0] && item.restaurant.activities[0].icon_color}` }}>{item.restaurant.activities[0] && item.restaurant.activities[0].icon_name}</span>
                          {item.restaurant.activities[0] && item.restaurant.activities[0].description}
                        </div>
                        <div className="nowactive">
                          <span style={{ "background": `#${item.restaurant.activities[1] && item.restaurant.activities[1].icon_color}`}}>{item.restaurant.activities[1] && item.restaurant.activities[1].icon_name}</span>
                          {item.restaurant.activities[1] && item.restaurant.activities[1].description}
                        </div>
                      </div>
                    </li>
                  </NavLink>
                ))}

              </ul>
            </div>
          </div>
        </StickyContainer>
      </div>
      <Footer></Footer>
    </div>
    )
}
export default HomeUI;