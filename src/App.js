import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


import './styles/base.scss';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Order from './pages/Order/Order';
import User from './pages/User/User';
import Details from './pages/Details/Details'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/order" component={Order} />
          <Route path="/user" component={User} />
          <Route path="/details/:id/:offset" component={Details} />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
