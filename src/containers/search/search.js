import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Topbar from '../../components/top-bar/top-bar'
import Footer from '../../components/footer/footer'
import FilterSearch from '../../components/filter-search/filter-search'
import ShopList from '../../components/shop-list/shop-list'
import BrandList from '../../components/brand-list/brand-list'
import PriceSearch from '../../components/price-search/price-search'
import SearchResult from '../../components/search-result/search-result'

export default class Search extends React.Component {
  render() {
    const style = require('./search.scss');
    return (
      <div>
        <div>
          <Topbar />
          <Grid>
            <Row>
              <Col md={3}>
                <FilterSearch />
                <ShopList />
                <BrandList />
                <PriceSearch />
              </Col>
              <Col md={9}>
                <SearchResult />
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}
