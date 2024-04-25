import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList.jsx';
import { getProducts } from "../firebase/firebase.js";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { cid } = useParams();

    useEffect(() => {
        console.log("Valor de cid:", cid);

        console.log("Antes de llamar a getProducts()");
        getProducts()
            .then(prods => {
                console.log("Productos obtenidos:", prods);

                // Si no hay una categoría especificada, muestra todos los productos
                if (!cid) {
                    console.log("Todos los productos:", prods);
                    setProducts(prods);
                } else {
                    // Filtrar productos según la categoría especificada
                    const filteredProducts = prods.filter(prod => prod.category === cid);
                    console.log("Productos filtrados:", filteredProducts);
                    setProducts(filteredProducts);
                }
            })
            .catch((error) => console.log(error))
    }, [cid]);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <ItemList products={products} plantilla="Item" />
        </div>
    );
};


export default ItemListContainer;