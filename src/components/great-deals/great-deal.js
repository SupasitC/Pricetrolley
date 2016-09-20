import React from 'react'
import { Row, Col } from 'react-bootstrap'

import DealsBox from './deals-box'

export default class GreatDeals extends React.Component{
  render(){
    const style = require('./great-deals.scss');
    return(
      <div>
        <Row>
          <Col md={12}>
            <Col md={3}>
              <h3>Great deals</h3>
            </Col>
            <Col md={2} mdOffset={7}>
              <h3>See more >></h3>
            </Col>
          </Col>
        </Row>
        <Row>
          <DealsBox
            name = 'iphone'
            weight = '300'
            detail = 'Redmart'
            price = '1.95'
            imgLink = 'item1.jpg'/>
          <DealsBox
            name = 'iphone'
            weight = '300'
            detail = 'Redmart'
            price = '1.95'
            imgLink = 'item1.jpg'/>
          <DealsBox
            name = 'iphone'
            weight = '300'
            detail = 'Redmart'
            price = '1.95'
            imgLink = 'item1.jpg'/>
          <DealsBox
            name = 'iphone'
            weight = '300'
            detail = 'Redmart'
            price = '1.95'
            imgLink = 'item1.jpg'/>
        </Row>
      </div>
    )
  }
}
