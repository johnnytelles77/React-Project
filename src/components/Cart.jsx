/* import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext.jsx";
import { ItemList } from "./ItemList.jsx";
export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h1>Carrito Vacio</h1>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded">
            <Link to={"/"}>Volver al inicio</Link>
          </button>
        </>
      ) : (
        <div>
          {<ItemList products={carrito} plantilla="ItemCart" />}
          <div>
            <p>Resumen de la compra: $ {totalPrice()}</p>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={emptyCart}
            >
              Vaciar Carrito
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              <Link to={"/"}>Continuar Comprando</Link>
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              <Link to={"/checkout"}>Finalizar compra</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
 */



import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext.jsx";
import { ItemList } from "./ItemList.jsx";

export const Cart = () => {
  try {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
      <>
        {carrito.length === 0 ? (
          <>
            <h1>Carrito Vacio</h1>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              <Link to={"/"}>Volver al inicio</Link>
            </button>
          </>
        ) : (
          <div>
            {<ItemList products={carrito} plantilla="ItemCart" />}
            <div>
              <p>Resumen de la compra: $ {totalPrice()}</p>
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded"
                onClick={emptyCart}
              >
                Vaciar Carrito
              </button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                <Link to={"/"}>Continuar Comprando</Link>
              </button>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                <Link to={"/checkout"}>Finalizar compra</Link>
              </button>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.log("Error en Cart component:", error);
    return <p>Ocurrió un error al cargar el carrito.</p>;
  }
};
