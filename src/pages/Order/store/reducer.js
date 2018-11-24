const defaultState = {
  title: '这是订单页',
  src: './images/qianqiu.jpg',
  orderlist: [
    {
      img: "264936661e745ade10878ad455580a0fpng.",
      name: "千秋便当屋(固戍店)",
      time: "2018-10-28 12:22",
      food: "单点吉列猪扒（须搭配定... 等四件商品）",
      many: "￥21.00"
    },
    {
      img: "869a6201f2627f5669f90bbadda2b6d6jpeg.",
      name: "土耳其烤肉饭(后瑞店)",
      time: "2018-10-01 19:02",
      food: "蜜汁味烤肉加热狗",
      many: "￥13.10"
    },
    {
      img: "264936661e745ade10878ad455580a0fpng.",
      name: "千秋便当屋(固戍店)",
      time: "2018-09-02 18:17",
      food: "单点照烧鸡扒 (不配米饭) 等两件商品",
      many: "￥12.50"
    },
    {
      "img": "0ee66dc7f9d6c5ae0e15f22529f37645jpeg.",
      name: "牛气汉堡王(西乡黄...",
      time: "2018-09-02 12:11",
      food: "鸡腿堡+辣翅+中可套餐",
      many: "￥9.00"
    }
  ]
}

export default (state = defaultState, action) => {
  return state;
}
