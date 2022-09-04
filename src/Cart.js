import React from 'react'
import Nav from './Nav'
import Mycart from './Mycart'
import { useContext } from 'react';
import CartContext from './CartContext';
import './Cart.css';

function Cart() {
    const {items, empty} = useContext(CartContext);


  return (
    <div className='cart'>
        <Nav />
        <div className='cart_top'>
            <div className='cart_title'>

              <span>МИНИЙ САГС</span>
            </div>
            <div className='empty'>
              <button onClick={() => empty()}>
                  Сагс хоослох
                </button>
              </div>
            {items.length > 0 ? <div className='cart_table'>
              <div className='table_title'>
                <p>Бүтээгдэхүүний нэр</p>
                <p>Нэгж үнэ</p>
                <p>Тоо ширхэг</p>
                <p>Нийт үнэ</p>
              </div>
                
              <div className='table_content'>

                {items.map((item => (
                    <Mycart key={item.id} id = {item.id} title = {item.title} price = {item.price} image = {item.image} quantity = {item.quantity}/>
                )))}
              </div>
            </div> : 
              <div>
                Таны сагс хоосон байна
                </div>
            }
            
            
          </div>
    </div>
  )
}

export default Cart