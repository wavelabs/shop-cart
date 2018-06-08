import React from 'react';
import {connect} from 'react-redux'
import {Row} from 'react-bootstrap';
import './ProductList.css';
import ProductItem from './ProductItem'

class ProductList extends React.Component {
  render () {
    return(
      <Row className="show-grid">
        { this.props.products.map( product => 
            <ProductItem key={product.id} product={product}/>
        )}
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductList)