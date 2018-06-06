import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './ShoppingCart.css'

const renderItemsCart = (items) => {
  if (items.length === 0) {
    return(<p>Todavia no tienes autos agregados</p>)
  } else {
    return(
      <ul>
        { items.map( (item, index) => {
            return(<li key={index}>{item.name}</li>)
          })
        }
      </ul>
    )
  }
}

const ShoppingCart = (props) => {
  return (
    <Row className="show-grid">
      <Col md={12}>
        <div className="shopping-cart">
          <h4>Tus futuros autos!</h4>
          { renderItemsCart(props.shopping_cart) }
        </div>
      </Col>
    </Row>
  )
}
export default ShoppingCart