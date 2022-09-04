import React from 'react'
import './Main.css';
import Nav from './Nav';
import Product from './Product';

function Main(props) {
    
    
    const products = [
        {id: "1", title: "Crab Pool Security", price : "30.2", image : "https://pngimg.com/uploads/beef/beef_PNG85.png"},
        {id: "2", title: "Crab Pool Security", price : "15.00", image : "https://pngimg.com/uploads/beef/beef_PNG85.png"},
        {id: "3", title: "Crab Pool Security", price : "18.00", image : "https://pngimg.com/uploads/beef/beef_PNG85.png"},
        {id: "4", title: "Crab Pool Security", price : "12.00", image : "https://pngimg.com/uploads/beef/beef_PNG85.png"},
        {id: "5", title: "Crab Pool Security", price : "30.00", image : "https://pngimg.com/uploads/beef/beef_PNG85.png"},
    ]

    
  return (
    <div className='main'>
        <Nav price_sum = {props.cartprice} count_product = {props.cartCount}/>
        <div className='sub'>
        <div className='top'>
            <h1>
                Featured Product
            </h1>
        </div>
        <div className='bottom'>
            {
                products.map((product => (
                    <Product key={product.id} id = {product.id} title = {product.title} price = {product.price} image = {product.image} quantity = {1} />
                )))
            }
            
        </div>
    </div>
    </div>
  )
}

export default Main