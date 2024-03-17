import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { getProducts } from "../firebase/firebase.js";


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { cid } = useParams();

useEffect(() => {
    console.log("Antes de llamar a getProducts()");
    getProducts()
        .then(prods => {
            console.log("Productos obtenidos:", prods);
            const productos = prods.filter(prod => prod.stock > 0);
            console.log("Productos filtrados:", productos);
            if (cid) {
                const productosFiltrados = productos.filter(prod => prod.category == cid);
                console.log("Productos filtrados por categoría:", productosFiltrados);
                setProducts(productosFiltrados);
            } else {
                console.log("Todos los productos:", productos);
                setProducts(productos);
            }

        })
        .catch((error) => console.log(error))
}, [cid]);




return (
    <div className="flex flex-wrap gap-4 justify-center">
    <ItemList products={products} plantilla="Item" />
    </div>
)
}

export default ItemListContainer; 