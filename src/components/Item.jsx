import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
      <div className="max-w-xs mx-auto bg-white p-4 rounded-md shadow-md">
        <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className="w-full h-40 object-cover mb-4 rounded-md" />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-700 mb-2 font-semibold">Ubicación: {product.location}</p>
        <p className="text-gray-700 mb-2">Distancia: {product.distance} miles away</p>
        <p className="text-gray-700 mb-2">Disponible: {product.availability}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="flex items-center">
            <span className="text-gray-700">({product.numReviews} reviews)</span>
          </div>
        </div>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          <Link to={`/product/${product.id}`}>
            Agregar al Carrito
          </Link>
        </button>
      </div>
  );
};




