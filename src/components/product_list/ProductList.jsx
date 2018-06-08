import React from 'react';
import {Row} from 'react-bootstrap';
import './ProductList.css';
import ProductItem from './ProductItem'

class ProductList extends React.Component {
  state = {
    products: [
      {id: 1, name: "Auto lujoso", img: "/images/auto-1.jpg"},
      {id: 2, name: "Auto lujoso 2", img: "/images/auto-2.jpg"},
      {id: 3, name: "Auto lujoso 3", img: "/images/auto-3.jpg"}
    ]
  }

  render () {
    return(
      <Row className="show-grid">
        { this.state.products.map( product => 
            <ProductItem key={product.id} product={product} addToCart={this.props.addToCart}/>
        )}
      </Row>
    )
  }
}

export default ProductList