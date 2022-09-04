import React from 'react'
import './Cart.css';
import { useContext } from 'react';
import CartContext from './CartContext';
function Mycart(props) {
    

  const {decreaceQuantity, increaceQuantity, delete_one} = useContext(CartContext);

  return (
    <div className='cart_main'>
               
               <div className='cart_content'>
               <img src={props.image} className='product_img' alt=''/>

                <p>{props.title}</p>
                <p>{props.price}</p>
                <p><button onClick={() => decreaceQuantity(props.id)} >-</button>{props.quantity}<button onClick={() => increaceQuantity(props.id)}>+</button></p>
                <p>{(props.price * props.quantity).toFixed(2)}₮</p>
              </div>
              <button className='clear' onClick={() => delete_one(props.id)}>Устгах</button>
              <hr/>
        </div>
  )
}

export default Mycart