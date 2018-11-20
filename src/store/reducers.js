// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';

import HomeReducer from '../pages/Home/store/reducer';
import CategoryReducer from '../pages/Category/store/reducer';
import OrderReducer from '../pages/Order/store/reducer';
import MyReducer from '../pages/My/store/reducer';

let AllReducers = combineReducers({
  Home: HomeReducer,
  Category: CategoryReducer,
  My: MyReducer,
  Order: OrderReducer
})

export default AllReducers;
