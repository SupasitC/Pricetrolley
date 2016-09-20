import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default class DealsBox extends React.Component {
  render() {
    const style = require('./deals-box.scss');
    return (
      <div>
        <Col md={3}>
          <div className={style.dealsBox}>
            <Row>
              <Col md={12}>
                <div className={style.cover}>
                  <img src={"./images/"+this.props.imgLink} className={style.imgCover}/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h3>{this.props.name}</h3>
                <p>{this.props.weight}g</p>
                <p>{this.props.detail}</p>
                <h4>${this.props.price}</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button bsStyle="primary" className={style.addBtn}>Add to cart</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    )
  }
}
