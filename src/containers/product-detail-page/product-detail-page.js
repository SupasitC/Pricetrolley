import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Topbar from '../../components/top-bar/top-bar'
import Footer from '../../components/footer/footer'
import ProductDetail from '../../components/product-detail/product-detail'
import HistoricalPrices from '../../components/historical-prices/historical-prices'
import SimilarProduct from '../../components/similar-product/similar-product'

export default class ProductDetailPage extends React.Component {
  render() {
    const style = require('./product-detail-page.scss');
    return (
      <div>
        <div>
          <Topbar />
          <Grid>
            <Row>
              <Col md={12}>
                <div className={style.route}>
                  <a href="#">Home</a> / <a href="#">Library</a> / <span>Data</span>
                </div>
              </Col>
            </Row>
            <ProductDetail />
            <HistoricalPrices />
            <SimilarProduct />
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}
