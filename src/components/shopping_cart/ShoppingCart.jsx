import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './ShoppingCart.css'

class ShoppingCart extends React.Component {
  render (){
    return (
      <Row className="show-grid">
        <Col md={12}>
          <div className="shopping-cart">
            <h4>Tus futuros autos!</h4>
          </div>
        </Col>
      </Row>
    )
  }
}
export default ShoppingCart
