import React from 'react'
import { Row, Col } from 'react-bootstrap'

import CategoryBox from './category-box'

export default class Category extends React.Component {
  render() {
    const style = require('./category.scss');
    return (
      <div className={style.category}>
        <Row>
          <CategoryBox
            name = 'Technologies'
            amount = '2134'
            imgLink = 'category1.jpg'/>
          <CategoryBox
            name = 'Technologies'
            amount = '2134'
            imgLink = 'category1.jpg'/>
          <CategoryBox
            name = 'Technologies'
            amount = '2134'
            imgLink = 'category1.jpg'/>
          <CategoryBox
            name = 'Technologies'
            amount = '2134'
            imgLink = 'category1.jpg'/>
        </Row>
      </div>
    )
  }
}
