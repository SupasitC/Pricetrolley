import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import PriceList from './price-list'

export default class ProductDetailContent extends React.Component {
  render() {
    const style = require('./product-detail-content.scss');
    return (
      <Col md={8}>
        <div className={style.product}>
          <FontAwesome
            className={style.fav}
            name='heart-o'
          />
          <h2>Product Name</h2>
        </div>
        <div className={style.rate}>
          <div className={style.ratingBlock}>
            <FontAwesome
              className={style.star}
              name='star'
            />
            <FontAwesome
              className={style.star}
              name='star'
            />
            <FontAwesome
              className={style.star}
              name='star'
            />
            <FontAwesome
              className={style.star}
              name='star'
            />
            <FontAwesome
              className={style.star}
              name='star-o'
            />
          </div>
          <h4>rating 4</h4>
        </div>
        <div>
          <PriceList />
          <PriceList />
          <PriceList />
          <PriceList />
        </div>
      </Col>
    )
  }
}
