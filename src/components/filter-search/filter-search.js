import React from 'react'
import { Row, Col} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class FilterSearch extends React.Component {
  render() {
    const style = require('./filter-search.scss');
    return (
      <div className={style.FilterSearch}>
        <Row>
          <Col md={12}>
            <h5>Filter by <a href="#">Clear all</a></h5>
          </Col>
        </Row>
        <Row>
          <ul>
            <li>
              <span>Redmart</span>
              <FontAwesome
                className={style.remove}
                name='times'
              />
            </li>
            <li>
              <span>Brand 1</span>
              <FontAwesome
                className={style.remove}
                name='times'
              />
            </li>
          </ul>
        </Row>
      </div>
    )
  }
}
