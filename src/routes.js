import React from 'react'
import { Route, Redirect, browserHistory, Router } from 'react-router'
import Home from './containers/home/home'
import NotFound from './containers/not-found/not-found'
import Search from './containers/search/search'
import AboutUs from './containers/about-us/about-us'
import ProductDetailPage from './containers/product-detail-page/product-detail-page'

export default (
  <Router history={browserHistory}>
    <Route path="home" component={Home} />
    <Route path="search" component={Search} />
    <Route path="about" component={AboutUs} />
    <Route path="product_detail_page" component={ProductDetailPage} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Router>
);
