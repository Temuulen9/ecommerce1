
import './App.css';

import Main from './Main';
import React from 'react';
import Cart from './Cart';
import {Route, Routes} from 'react-router-dom';
import Detail from './Detail';
import {CartProvider} from './CartContext'
function App() {
 
  return (
    <CartProvider>
    <Routes>
      <Route path='/' element={<Main />}/>
      {/* <Route path='/' element={<Main price = {cartprice} />}/> */}
      <Route path='/cart' element={<Cart />}/>
      <Route path='/detail/:id' element={<Detail />}/>
    </Routes>
    </CartProvider>
  );
}

export default App;
