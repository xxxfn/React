import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


import './styles/base.scss';

import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Order from './pages/Order/Order';
import My from './pages/My/My';
import Register from './User/Register/Register';
import Login from './User/Login/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/order" component={Order} />
          <Route path="/my" component={My}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
