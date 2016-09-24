import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import DealsBox from '../../components/great-deals/deals-box'

export default class SearchResult extends React.Component {
  render() {
    const style = require('./search-result.scss');
    return (
      <div>
        <Row>
          <Col md={12}>
            <h3>Search : iPhone </h3>
            <span>Found: 8</span>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
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
          </Col>
        </Row>
      </div>
    )
  }
}

