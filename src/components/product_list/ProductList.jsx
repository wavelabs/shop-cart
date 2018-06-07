import React from 'react';
import {Row} from 'react-bootstrap';
import './ProductList.css';
import ProductItem from './ProductItem'

class ProductList extends React.Component {
  state = {
    products: [
      {id: 1, name: "Auto lujoso", img: "https://loremflickr.com/320/240/racecar?random=1"},
      {id: 2, name: "Auto lujoso 2", img: "https://loremflickr.com/320/240/racecar?random=2"},
      {id: 3, name: "Auto lujoso 3", img: "https://loremflickr.com/320/240/racecar?random=3"}
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