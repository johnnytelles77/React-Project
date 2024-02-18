import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { cid } = useParams();

  useEffect(() => {
    fetch('../data/productos.json')
      .then((response) => response.json())
      .then((prods) => {
        if (cid) {
          const productosFiltrados = prods.filter(prod => prod.category == cid);
          setProducts(productosFiltrados);
        } else {
          setProducts(prods);
        }
      })
      .catch((error) => console.log(error));
  }, [cid]);

  return (
    <div>
      <p>{greeting}</p>
      <div>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
