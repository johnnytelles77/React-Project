/* import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Footer from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";
import { Checkout } from "./components/Checkout.jsx";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { CarritoProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'



const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cid" element={<ItemListContainer />} />
          <Route path="/product/:pid" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  );
};


export default App;
 */



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from './components/Footer.jsx';
import { Cart } from './components/Cart.jsx';
import { Checkout } from './components/Checkout.jsx';
import { ItemDetailsContainer } from './components/ItemDetailsContainer.jsx';
import { NotFound } from './components/NotFound.jsx';
import { CarritoProvider } from './context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  try {
    return (
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element={<ItemListContainer />} />
            <Route path="/product/:pid" element={<ItemDetailsContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    );
  } catch (error) {
    console.log('Error en la aplicación:', error);
    return <p>Ocurrió un error en la aplicación. Por favor, inténtalo de nuevo más tarde.</p>;
  }
};

export default App;
