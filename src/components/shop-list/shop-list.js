import React from 'react'
import { Row, Col, FormGroup, Checkbox } from 'react-bootstrap'

export default class ShopsList extends React.Component {
  render() {
    const style = require('./shop-list.scss');
    return (
      <div className={style.ShopList}>
        <Row>
          <Col md={12}>
            <h5>Shops</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Checkbox>
                <span>All</span>
              </Checkbox>
              <Checkbox>
                <span>Redmart</span>
              </Checkbox>
              <Checkbox>
                <span>Giant</span>
              </Checkbox>
              <Checkbox>
                <span>Coldstorage</span>
              </Checkbox>
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}
