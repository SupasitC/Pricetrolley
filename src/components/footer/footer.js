import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Footer extends React.Component {
  render() {
    const style = require('./footer.scss');
    return (
      <div className={style.footer}>
        <Grid>
          <Row>
            <Col md={12}>
              <Col md={4}>
                <h3>Pricetrolley</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit</p>
                <h5>COPYRIGHT © 2016 PRICETROLLEY</h5>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
