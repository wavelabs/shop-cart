import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProductList from '../product_list/ProductList';
import ShoppingCart from '../shopping_cart/ShoppingCart';

class ProductView extends Component{
  state = {
    shopping_cart: []
  }

  addToCart = (product) => {
    this.state.shopping_cart.push(product)
    this.setState({shopping_cart: this.state.shopping_cart})
  }

  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={9}>
            <ProductList addToCart={this.addToCart}/>
          </Col>
          <Col md={3}>
            <ShoppingCart shopping_cart={this.state.shopping_cart}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProductView