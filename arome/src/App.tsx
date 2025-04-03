import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Carrinho from './pages/carrinho/carrinho';
import Product from './pages/product/product';
import Singup from './pages/singup/singup';
import Payment from './pages/payment/payment';
import LoginRestrict from './pages/loginRestrict/loginRestrict';
import Restrict from './pages/restrict/restrict';
import { CarrinhoProvider } from './contexts/carinho.contexts';

function App() {
  return (
    <CarrinhoProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/' element={<Singup />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/loginRestrict' element={<LoginRestrict />} />
          <Route path='/restrict' element={<Restrict />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;
