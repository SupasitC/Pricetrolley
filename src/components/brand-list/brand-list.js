import React from 'react'
import { Row, Col, FormGroup, Checkbox } from 'react-bootstrap'

export default class BrandList extends React.Component {
  render() {
    const style = require('./brand-list.scss');
    return (
      <div className={style.BrandList}>
        <Row>
          <Col md={12}>
            <h5>Brands</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Checkbox>
                <span>Brand 1</span>
              </Checkbox>
              <Checkbox>
                <span>Brand 2</span>
              </Checkbox>
              <Checkbox>
                <span>Brand 3</span>
              </Checkbox>
              <Checkbox>
                <span>Brand 4</span>
              </Checkbox>
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}
