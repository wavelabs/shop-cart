import React from 'react';
import {Col, Button} from 'react-bootstrap';

const ProductItem = (props) => {
  return(
    <Col md={4}>
      <div className="product-item">
        <figure>
          <img src={props.product.img} alt={props.product.name}/>
        </figure>
        <p>{props.product.name}</p>
        <Button onClick={() => props.addToCart(props.product)}>
          Agregar
        </Button>
      </div>
    </Col>
  )
}

export default ProductItem