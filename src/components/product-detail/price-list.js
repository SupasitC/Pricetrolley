import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default class PriceList extends React.Component {
  render() {
    const style = require('./price-list.scss');
    return (
      <Row>
        <div className={style.priceBlock}>
          <Col md={2} mdOffset={1}>
            <div className={style.cover}>
              <img src={"./images/redmart_logo.jpg"} className={style.imgCover}/>
            </div>
          </Col>
          <Col md={9}>
            <div className={style.price}>
              <h3>$44</h3>
            </div>
          </Col>
        </div>
      </Row>

    )
  }
}
