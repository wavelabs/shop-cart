import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap';
import './ShoppingCart.css'

class ShoppingCart extends React.Component {
  renderItemsCart (items) {
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

  render () {
    return (
      <Row className="show-grid">
        <Col md={12}>
          <div className="shopping-cart">
            <h4>Tus futuros autos!</h4>
            { this.renderItemsCart(this.props.cart) }
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(ShoppingCart)
