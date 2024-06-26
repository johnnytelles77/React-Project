import React from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../hooks/useCounter.jsx";
import { useCarritoContext } from "../context/CartContext.jsx";
import { toast } from "react-toastify";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext();
  const { count, increment, decrement, reset } = useCounter(1, item.stock, 1);

  const handleAddToCart = () => {
    try {
      addItem(item, count);
      toast.success(`Producto agregado al carrito correctamente`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    } catch (error) {
      console.log("Error al agregar producto al carrito:", error);
      toast.error(`Error al agregar producto al carrito: ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg max-w-md">
      <Link to={"/"}>
        <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
          Cerrar
        </button>
      </Link>

      <img
        className="w-full h-64 object-cover mb-6"
        src={`${item.img}`}
        alt={`Imagen de ${item.title}`}
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray-700 mb-2 font-semibold">
          Descripción: {item.description}
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Ubicación: {item.location}
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Distancia: {item.distance} miles away
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Disponible: {item.availability}
        </p>
        <p className="text-gray-700 mb-2 font-semibold">
          Precio: ${item.price}
        </p>
        <div className="container mx-auto mt-8">
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded"
              onClick={decrement}
            >
              -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded"
              onClick={increment}
            >
              +
            </button>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
