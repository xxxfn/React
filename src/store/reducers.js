// 叫做 reducer 的拆分
// 可以使用 redux 模块提供了一个  combineReducers 东西，
import { combineReducers } from 'redux';

import HomeReducer from '../pages/Home/store/reducer';
import CategoryReducer from '../pages/Category/store/reducer';
import OrderReducer from '../pages/Order/store/reducer';
import UserReducer from '../pages/User/store/reducer';
import DeliciousFood from '../pages/DeliciousFood/store/reducer';


let AllReducers = combineReducers({
  Home: HomeReducer,
  Category: CategoryReducer,
  User: UserReducer,
  Order: OrderReducer,
  DeliciousFood: DeliciousFood
})

export default AllReducers;
