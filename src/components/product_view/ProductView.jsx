import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProductList from '../product_list/ProductList';
import ShoppingCart from '../shopping_cart/ShoppingCart';

class ProductView extends Component{
  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={9}>
            <ProductList/>
          </Col>
          <Col md={3}>
            <ShoppingCart/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProductView