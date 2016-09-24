import React from 'react'
import { Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

export default class PriceSearch extends React.Component {
  render() {
    const style = require('./price-search.scss');
    return (
      <div className={style.PriceSearch}>
        <Row>
          <Col md={12}>
            <h5>Price</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form componentClass="fieldset" inline>
              <InputGroup className={style.width}>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <span> to </span>
              <InputGroup className={style.width}>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <Button className={style.float}>Go</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
