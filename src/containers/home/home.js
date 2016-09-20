import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Topbar from '../../components/top-bar/top-bar'
import GreatDeals from '../../components/great-deals/great-deal'
import Category from '../../components/category/category'

export default class Home extends React.Component{
  render(){
    const style = require('./home.scss');
    return(
      <div>
        <Topbar />
        <Grid>
          <Row>
            <Col md={12}>
              <div className={style.cover}>
                <img src="./images/cover.jpg" className={style.imgCover} />
              </div>
            </Col>
          </Row>
          <GreatDeals/>
          <Category />
        </Grid>
      </div>
    )
  }
}
