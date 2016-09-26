import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default class PriceList extends React.Component {
  render() {
    const style = require('./price-list.scss');
    return (
      <div className={style.priceList}>
        <Row>
          <Col md={3}>
            <span className={style.price}>$400,000</span>
          </Col>
          <Col md={9}>
            <span className={style.date}>16/12/2016</span>
          </Col>
        </Row>
      </div>
    )
  }
}
