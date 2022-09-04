import React from 'react'
import './Product.css';
import {Link} from "react-router-dom";
import {useContext} from 'react';
import CartContext
 from './CartContext';
function Product(props)    {

  const {addToCart} = useContext(CartContext);


  return (
   
      <div >
        <Link to={"detail/" + props.id} style={{ textDecoration: 'none', color: 'initial'}} className='product'>
          <img src={props.image} className='product_img' alt=''/>

          <div className='title'>
              {props.title}
          </div>
          <div className='price'>
          ${props.price}
          
          </div>
          </Link>
          <div className='add'>
            <button className='cart_button' onClick={() => addToCart(props.title, props.price, props.image, props.id, props.quantity)}>
              Сагсанд нэмэх
            </button>
          </div>
      </div>
  )
}

export default Product