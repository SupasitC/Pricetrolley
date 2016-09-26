import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductDetailContent from './product-detail-content'
import ProductDetailImg from './product-detail-img'

export default class ProductDetail extends React.Component {
  render() {
    const style = require('./product-detail-img.scss');
    return (
      <div className={style.ProductDetail}>
        <Row>
          <ProductDetailImg />
          <ProductDetailContent />
        </Row>
        <Row>
          <Col md={12}>
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi.</p>
          </Col>
        </Row>
      </div>
    )
  }
}
