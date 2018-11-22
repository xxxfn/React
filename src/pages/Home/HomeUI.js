// 这个是 home ui 组件
import React from 'react';
// import { Injector } from 'ts-di';
// import { Injector } from '/path/to/node_modules/ts-di/dist/index.js';
// import { Text, View } from 'react-native';
import './Home.scss';
import { StickyContainer, Sticky } from 'react-sticky';
import { SearchBar, Grid, WingBlank, Carousel, Tabs, WhiteSpace, Flex } from 'antd-mobile';
import Footer from '../../components/Footer/index';

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
            <div className="cfj-adress">{props.position.ad_info && props.position.ad_info.district}</div>
          </div>
          <div className="cfj-seach"><SearchBar placeholder="搜索饿了么商家，商品名称" /></div>
          <div className="cfj-home-activity">
            <Grid data={data && data} isCarousel dotStyle={{ "width": 10, "height": 3 }} dotActiveStyle={{ "width": 10, "height": 3, "background": "blue" }} infinite hasLine={false} columnNum={5} />
          </div>
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
                  <li>筛选</li>
                </ul>
              )}
              {/* <div className="cfj-recommend-title">
              </div> */}
            </Sticky>
            <div className="cfj-recommend-list">
              <ul>
                {props.restaurant.map((item,index) =>(
                  <li key={index}>
                    <div className="shopinfo">
                      <div className="shopimg">
                        <img src={`https://fuss10.elemecdn.com/${item.restaurant.image_path}.${/jpeg/.test(item.restaurant.image_path) == true ? 'jpeg' : 'png'}`} alt="" />
                      </div>
                      <div className="shopbody">
                        <h3 className="shopname">{item.restaurant.name}</h3>
                        <div className="shopnum">评分{item.restaurant.rating}月售{item.restaurant.recent_order_num}单</div>
                        <div className="shopprice">￥{item.restaurant.piecewise_agent_fee.rules[0].price}起送|{item.restaurant.piecewise_agent_fee.tips}</div>
                      </div>
                    </div>
                    <div className="shopactive">
                      <div className="shoptag">
                        <span>{item.restaurant.support_tags[0].text}</span><span>{item.restaurant.support_tags[1] && item.restaurant.support_tags[1].text}</span>
                      </div>
                      <div className="nowactive">
                        <span style={{ "background": `#${item.restaurant.activities[0].icon_color}` }}>{item.restaurant.activities[0].icon_name}</span>
                        {item.restaurant.activities[0].description}
                      </div>
                      <div className="nowactive">
                        <span style={{ "background": `#${item.restaurant.activities[0].icon_color}`}}>{item.restaurant.activities[1] && item.restaurant.activities[1].icon_name}</span>
                        {item.restaurant.activities[1] && item.restaurant.activities[1].description}
                      </div>
                    </div>
                  </li>
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