import React from 'react';
import {connect} from 'react-redux'
import {Col, Button} from 'react-bootstrap';

class ProductItem extends React.Component {
  render () {
    return(
      <Col md={4}>
        <div className="product-item">
          <figure>
            <img src={this.props.product.img} alt={this.props.product.name}/>
          </figure>
          <p>{this.props.product.name}</p>
          <Button onClick={ () => this.props.addToCart(this.props.product)}>
            Agregar
          </Button>
        </div>
      </Col>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart (product) {
      let action = {type: 'ADD_TO_CART', product: product}
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductItem)