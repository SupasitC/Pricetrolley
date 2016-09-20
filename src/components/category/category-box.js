import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default class CategoryBox extends React.Component {
  render() {
    const style = require('./category-box.scss');
    return (
      <div>
        <Col md={6}>
          <div className={style.categoryBox}>
            <Row>
              <Col md={12}>
                <div className={style.cover}>
                  <img src={"./images/"+this.props.imgLink} className={style.imgCover}/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <h4>{this.props.name}</h4>
              </Col>
              <Col md={5} mdOffset={2}>
                <h4>{this.props.amount} Products</h4>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    )
  }
}
