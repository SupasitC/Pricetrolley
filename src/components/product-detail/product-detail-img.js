import React from 'react'
import { Col, Button } from 'react-bootstrap'

export default class ProductDetailImg extends React.Component {
  render() {
    const style = require('./product-detail-img.scss');
    return (
      <Col md={4}>
        <div className={style.cover}>
          <img src={"./images/item1.jpg"} className={style.imgCover}/>
        </div>
        <Button bsSize="large" block>ADD TO CART</Button>
      </Col>
    )
  }
}
