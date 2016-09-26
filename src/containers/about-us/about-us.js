import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Topbar from '../../components/top-bar/top-bar'
import Footer from '../../components/footer/footer'

export default class AboutUS extends React.Component {
  render() {
    const style = require('./about-us.scss');
    return (
      <div>
        <div>
          <Topbar />
          <Grid>
            <Row>
              <Col md={12}>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisici elit,
                  sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}
