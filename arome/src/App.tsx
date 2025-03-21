import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Carrinho from './pages/carrinho/carrinho';
import Product from './pages/product/product';
import Singup from './pages/singup/singup';
import Payment from './pages/payment/payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/carrinho' element={<Carrinho></Carrinho>}/>
        <Route path='/product' element={<Product></Product>}/>
        <Route path='/singup' element={<Singup></Singup>}/>
        <Route path='/payment' element={<Payment></Payment>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
