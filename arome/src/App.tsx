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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/carrinho' element={<Carrinho></Carrinho>}/>
        <Route path='/product' element={<Product></Product>}/>
        <Route path='/' element={<Singup></Singup>}/>
        <Route path='/payment' element={<Payment></Payment>}/>
        <Route path='/loginRestrict' element={<LoginRestrict></LoginRestrict>}/>
        <Route path='/restrict' element={<Restrict></Restrict>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
