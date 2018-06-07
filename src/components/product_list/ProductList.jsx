import React from 'react';
import {Row} from 'react-bootstrap';
import './ProductList.css';
import ProductItem from './ProductItem'

class ProductList extends React.Component {
  render () {
    return(
      <Row className="show-grid">
        { this.props.products.map( product => 
            <ProductItem key={product.id} product={product} addToCart={this.props.addToCart}/>
        )}
      </Row>
    )
  }
}

export default ProductList