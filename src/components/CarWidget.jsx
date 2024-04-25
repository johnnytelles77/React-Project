import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()

    return (
    <Link to={'/cart'}>        
        <button className="bg-cyan-500 text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>{getItemQuantity()}</span>
        </button>
    </Link>    
    )
}

export default CartWidget;

