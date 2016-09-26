import React from 'react'
import {Row, Col} from 'react-bootstrap'

import PriceList from './price-list'

export default class HistoricalPrices extends React.Component {
  render() {
    const style = require('./historical-prices.scss');
    return (
      <div className={style.historicalPrices}>
        <h3>Historical Prices</h3>
        <Row>
          <Col md={8}>
            <div className={style.cover}>
              <img src={"./images/cover.jpg"} className={style.imgCover}/>
            </div>
          </Col>
          <Col md={4}>
            <h4>Lasted price</h4>
            <PriceList />
            <PriceList />
            <PriceList />
            <PriceList />
            <PriceList />
            <PriceList />
          </Col>
        </Row>
      </div>
    )
  }
}
