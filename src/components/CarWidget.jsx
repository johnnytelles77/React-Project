import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div> 
      Mi carrito
      <FontAwesomeIcon icon={faShoppingCart} /> 7
    </div>
  );
}

export default CartWidget;
