import React from 'react'
import { Route, IndexRoute, Redirect, browserHistory, Router } from 'react-router'
import Home from './containers/home/home'
import NotFound from './containers/not-found/not-found'
import { PAGE_NAME } from  './constants/page-name';

export default (
  <Router history={browserHistory}>
    <Route path="home" component={Home} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Router>
);
