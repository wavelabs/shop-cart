import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProductList from '../product_list/ProductList';
import ShoppingCart from '../shopping_cart/ShoppingCart';

class ProductView extends Component{
  state = {
    products: [
      {id: 1, name: "Auto lujoso", img: "https://loremflickr.com/320/240/racecar?random=1"},
      {id: 2, name: "Auto lujoso 2", img: "https://loremflickr.com/320/240/racecar?random=2"},
      {id: 3, name: "Auto lujoso 3", img: "https://loremflickr.com/320/240/racecar?random=3"}
    ],
    cart: []
  }

  addToCart = (product) => {
    this.state.cart.push(product)
    this.setState({cart: this.state.cart})
  }

  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={9}>
            <ProductList addToCart={this.addToCart} products={this.state.products}/>
          </Col>
          <Col md={3}>
            <ShoppingCart cart={this.state.cart}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProductView