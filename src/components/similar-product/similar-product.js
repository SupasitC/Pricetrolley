import React from 'react'
import {Row, Col} from 'react-bootstrap'

import DealsBox from '../great-deals/deals-box'

export default class SimilarProduct extends React.Component {
  render() {
    const style = require('./similar-product.scss');
    return (
      <div className={style.SimilarProduct}>
        <Row>
          <Col md={12}>
            <h3>Similar Products</h3>
          </Col>
          <DealsBox
            name='iphone'
            weight='300'
            detail='Redmart'
            price='1.95'
            imgLink='item1.jpg'/>
          <DealsBox
            name='iphone'
            weight='300'
            detail='Redmart'
            price='1.95'
            imgLink='item1.jpg'/>
          <DealsBox
            name='iphone'
            weight='300'
            detail='Redmart'
            price='1.95'
            imgLink='item1.jpg'/>
          <DealsBox
            name='iphone'
            weight='300'
            detail='Redmart'
            price='1.95'
            imgLink='item1.jpg'/>
        </Row>
      </div>
    )
  }
}
